  import React, {
	useEffect, useState, 
createContext, useContext} 
from "react";

import {ethers} from "ethers";

import {
CheckIfWalletConnected, 
connectingWithContract,
connectWallet, 
} from '../Utils/apiFeature';

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
	const DAPP_NAME = "GPT_MEMBERSHIP"

	const [address, setAddress] = useState("");
	const [contractMembership, setContractMembership] = useState([]);
	const [Free, setFree] = useState();
	const [userMembership, setUserMembership] = useState({});

	const fetchData = async() => {
		try {
				const freeTrail = localStorage.getItem("freeTrail");
				const FREE_TRAIL = JSON.parse(freeTrail);
				setFree(freeTrail);
		
				const contract = await connectingWithContract();
				const connectAccount = await connectWallet();
				setAddress(connectAccount);

				// console.log(contract);
				const oneMonth = await contract.getMemberships(1);
				const sixMonth = await contract.getMemberships(2);
				const oneYear = await contract.getMemberships(3);

				contractMembership = [
					{
						membership_name: oneMonth?.name,
						membership_date: oneMonth?.date,
						membership_id: oneMonth?.id.toNumber(),
						membership_cost: ethers.utils.formatUnits(
						oneMonth?.cost.toString(),"ether"),
					},
					{
						membership_name: sixMonth?.name,
						membership_date: sixMonth?.date,
						membership_id: sixMonth?.id.toNumber(),
						membership_cost: ethers.utils.formatUnits(
						sixMonth?.cost.toString(),"ether"),
					},
					{
						membership_name: oneYear?.name,
						membership_date: oneYear?.date,
						membership_id: oneYear?.id.toNumber(),
						membership_cost: ethers.utils.formatUnits(
						oneYear?.cost.toString(),"ether"),
					},
					]
				// console.log(contractMembership);
				setContractMembership(contractMembership);

				const userMembership = await contract.getUsermembership(connectAccount)
				
				userMembership = {
				addressUser: userMembership.addressUser.toLowerCase(),
				expiredate: userMembership.expireDate,
				cost: ethers.utils.formatUnits(
					userMembership.cost.toString(),"ether"),
				membershipId: userMembership.membershipId.toNumber(),
				id: userMembership.id.toNumber(),
			};
						// console.log(userMembership);
			setUserMembership(userMembership);
			const proMember = JSON.stringify(userMembership);
			localStorage.setItem("UserDetail", proMember);


		} catch(error) {
			console.log(error);
		}
	}

	useEffect(()=>{
		fetchData();
	}, []);

	const listMembership = async() => {
		const amount = 1;
		const MEMBERSHIP_NAME = "one month";
		const MEMBERSHIP_COST = ethers.utils.parseUnits(amount.toString(),"ether");
		const MEMBERSHIP_DATE = "July 31 2023";
		const contract = await connectingWithContract();
		const list = await contract.list(
			MEMBERSHIP_NAME,
			MEMBERSHIP_COST,
			MEMBERSHIP_DATE
			);
		await list.wait();
		console.log(list);
	}

	const buyMembership = async(membership_id) => {
		const contract = await connectingWithContract();
		const connectAccount = await connectWallet();
		

		setAddress(connectAccount);

		try {
			if(membership_id == 1){
				const today = Date.now() + 2678400000;
				let date = new Date(today);
				const expiredDate = data.toLocalDateString("en-US");
				const money = ethers.utils.parseEther("1")
			
			const mintTransaction = await contract.mint(
				membership_id,
				connectAccount,
				expiredDate.toString(),
				{
					value: money.toString(),
				}

				);

			await mintTransaction.wait()
			const freeTrail = JSON.stringify("Pro Member");
			localStorage.setItem("freeTrail", freeTrail);
			console.log("Taken membership", mintTransaction);
			window.locatin.reload();
			} else if (membership_id == 2){
				const today = Date.now() + 2678400000 * 6;
				let date = new Date(today);
				const expiredDate = data.toLocalDateString("en-US");
				const money = ethers.utils.parseEther("3")
			
			const mintTransaction = await contract.mint(
				membership_id,
				connectAccount,
				expiredDate.toString(),
				{
					value: money.toString(),
				}

				);

			await mintTransaction.wait()
			const freeTrail = JSON.stringify("Pro Member");
			localStorage.setItem("freeTrail", freeTrail);
			console.log("Taken membership", mintTransaction);
			window.locatin.reload();

			} else {

				const today = Date.now() + 2678400000 * 12;
				let date = new Date(today);
				const expiredDate = data.toLocalDateString("en-US");
				const money = ethers.utils.parseEther("5")
			
			const mintTransaction = await contract.mint(
				membership_id,
				connectAccount,
				expiredDate.toString(),
				{
					value: money.toString(),
				}

				);

			await mintTransaction.wait()
			const freeTrail = JSON.stringify("Pro Member");
			localStorage.setItem("freeTrail", freeTrail);
			console.log("Taken membership", mintTransaction);
			window.locatin.reload();

			}
		} catch(error) {
			console.log(error);	
		}
	}



	return(
		<StateContext.Provider value={{
			DAPP_NAME, 
			listMembership,
			buyMembership,
			Free,
			address,
			contractMembership,
			userMembership,}}>
			{children}
		</StateContext.Provider>
		);
};

export const useStateContext = () => useContext(StateContext);