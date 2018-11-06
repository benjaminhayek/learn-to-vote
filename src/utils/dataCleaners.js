import { getMembers, getPosition, comparePositions, getSponsors, compareSenators } from './ApiCals';

export const congressData = async (chamber) => {
    const congressmen = await getMembers(chamber)
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

export const senateData = async (chamber) => {
    const senators = await getMembers(chamber)
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
        const position = await getPosition(id1)
        const positionVote = await Promise.all(position.map(async vote => {
                return {
                    position: vote.position,
                    name: vote.bill.number
                }   
            }))
        const position2 = await getPosition(id2)
        const positionVote2 = await Promise.all(position2.map(async vote => {
            return {
                position: vote.position,
                name: vote.bill.number
            }    
        }))
        return {
            url: website,
            committees: bill.committees, 
            title: bill.title,
            billName: bill.number,
            position1: positionVote,
            position2: positionVote2,
            }
    })
    const result = await  Promise.all(unresolvedPromises)
    const filteredResult = result.filter(bill => {
        const name1 = bill.position1.map(bill => bill.name)
        const name2 = bill.position2.map(bill => bill.name)
        const match = name1.filter(name => name === bill.billName)
        const match2 = name2.filter(name => name === bill.billName)
        return [...match, ...match2]
    })
    const cleanedResults = filteredResult.filter(bill => 
        (bill.committees.includes('Education'))
      )
    return cleanedResults
}
