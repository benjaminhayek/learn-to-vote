import { initialCongressFetch, initialSenateFetch, comparePositions, getSponsors, compareSenators } from './ApiCals';

export const congressData = async () => {
    const congressmen = await initialCongressFetch()
    const eachMember = congressmen.results.map((member) => {
        return {
            name: member.name,
            party: member.party,
            title: member.role,
            id: member.id,
            nextElection: member.next_election,
            selected: false,
        };
      });
      return eachMember;
}

export const senateData = async (data) => {
    const senators = await initialSenateFetch()
    const eachSenator = senators.results.map((senator) => {
        return {
            name: senator.name,
            party: senator.party,
            title: senator.role,
            id: senator.id,
            nextElection: senator.next_election,
            selected: false,
        };
      });
      return eachSenator;
}

export const educationBills = async (id1, id2) => {
    const bills = await comparePositions(id1, id2)
    const unresolvedPromises = await bills.map(async(bill) => {
        const website = await getSponsors(bill.api_uri)
        return {
            url: website,
            committees: bill.committees, 
            title: bill.title,
            }
    })
    const result = await  Promise.all(unresolvedPromises)
    const cleanedResults = result.filter(bill => 
        (bill.committees.includes('Education'))
      )
    return cleanedResults
}

export const senateEducationBills = async (id1, id2) => {
    const bills = await compareSenators(id1, id2)
    const unresolvedPromises = await bills.map(async(bill) => {
        const website = await getSponsors(bill.api_uri)
        return {
            url: website,
            committees: bill.committees, 
            title: bill.title,
            }
    })
    const result = await  Promise.all(unresolvedPromises)
    const cleanedResults = result.filter(bill => 
        (bill.committees.includes('Education'))
      )
    return cleanedResults
}
