import { initialCongressFetch, initialSenateFetch, comparePositions } from './ApiCals';

export const congressData = async (data) => {
    const congressmen = await initialCongressFetch()
    const eachMember = congressmen.results.reduce((membersData, member) => {
        membersData.push({
            name: member.name,
            party: member.party,
            title: member.role,
            id: member.id,
            nextElection: member.next_election,
            selected: false,
        });
        return membersData;
      }, []);
      return eachMember;
}

export const senateData = async (data) => {
    const senators = await initialSenateFetch()
    const eachSenator = senators.results.reduce((senateData, senator) => {
        senateData.push({
            name: senator.name,
            party: senator.party,
            title: senator.role,
            id: senator.id,
            nextElection: senator.next_election,
            selected: false,
        });
        return senateData;
      }, []);
      return eachSenator;
}

export const educationBills = async (id1, id2) => {
    const bills = await comparePositions(id1, id2)
    const billInfo = bills.reduce((billData, bill) => {
        if(bill.committees.includes('Education')){
        billData.push({
            url: bill.api_url,
            committees: bill.committees, 
            title: bill.title,
        })
    }
        return billData;
    }, [])
    console.log(billInfo)
    return billInfo
}
