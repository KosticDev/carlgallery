import './header.css';
import './Show.js';
import { ethers } from "ethers";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import metamask from '../../assets/img/metamask-logo.svg'
import walletconnect from '../../assets/img/walletconnect.svg'

function Header() {

    const [join, setJoin] = useState();
    const [state, setState] = useState(false);

    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new ethers.providers.Web3Provider(window.ethereum);
            const chainId = await window.ethereum.request({ method: "eth_chainId" });
            if (chainId !== "0x1") {
                try {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: "0x1" }],
                    });
                } catch (switchError) {
                    // This error code indicates that the chain has not been added to MetaMask.
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: "wallet_addEthereumChain",
                                params: [
                                    {
                                        chainId: "0x1",
                                        rpcUrl:
                                            "https://mainnet.infura.io/v3/9f65f2e7dc324b6fba99c874cecfbadd",
                                        // "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                                    },
                                ],
                            });
                        } catch (addError) {
                            // handle "add" error
                        }
                    }
                    // handle other "switch" errors
                }
                window.ethereum.on("chainChanged", handleChainChanged);
                function handleChainChanged(_chainId) {
                    // We recommend reloading the page, unless you must do otherwise
                    window.location.reload();
                }
            }

            await window.ethereum
                .enable()
                .then((result) => {
                    var str = result[0];
                    if (typeof result != "undefined" && result.length > 0) {
                        var start5 = str.substring(0, 5);
                        var middle5 = ".....";
                        var last5 = str.substring(37, 42);
                        var joined = start5 + middle5 + last5;
                        console.log(joined)
                        setState(true);
                        setJoin(joined);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (window.web3) {
            window.web3 = new ethers.providers.Web3Provider(window.ethereum);
            new ethers.providers.Web3Provider(window.ethereum).providers.HttpProvider(
                "https://mainnet.infura.io/v3/9f65f2e7dc324b6fba99c874cecfbadd"
                // "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
            );
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    }

    function show() {
        document.getElementById('wallet-connection').style.display = 'block';
        document.getElementById('navbar_show1').style.display = 'none';
    }

    function close() {
        document.getElementById('wallet-connection').style.display = 'none';
    }

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='main_top'>
                        <div className='logo'>
                            <h2><Link to='/'>Carl Gallery Club</Link></h2>
                        </div>
                        <div className='navbar'>
                            <ul className='list'>
                                <li><Link to='about'>About</Link></li>
                                <li><Link to='membership'>MemberShip</Link></li>
                                <li className='gallery'>
                                    <a>Gallery collection</a>
                                    <div className='dropdown'>
                                        <p><Link to='gallery1'>Abdul Qader genesis collection</Link></p>
                                        <p><Link to='gallery2'>Itzhaq Mevorah collection</Link></p>
                                    </div>
                                </li>
                                <div onClick={show} className='connect'>
                                    {state ? join : "Connect Wallet"}
                                </div>
                            </ul>
                        </div>
                        <div className='navbar_hidden'>
                            <div className='menubar'>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar_show'>
                <ul className='navbar_show1' id='navbar_show1'>
                    <li className='show'><Link to='about'>About</Link></li>
                    <li className='show'><Link to='membership'>MemberShip</Link></li>
                    <li className='show'><Link to='gallery1'>Abdul Qader genesis collection</Link></li>
                    <li className='show'><Link to='gallery2'>Itzhaq Mevorah collection</Link></li>
                    <li onClick={show} >{state ? join : "Connect Wallet"}</li>
                </ul>
            </div>

            <div id="wallet-connection" className="wallet-connection">
                <div className='connectwallet'>
                    <p>CONNECT TO A WALLET</p>
                    <p className='close'><i onClick={close} className='fa fa-close'></i></p>
                </div>
                <div className="metamask-btn" onClick={loadWeb3}>
                    <img src={metamask} alt="" />
                    METAMASK
                </div>
                <div className="walletconnection-btn">
                    <img src={walletconnect} alt="" />
                    WALLET CONNECT
                </div>
            </div>
        </>
    );
}

export default Header;


