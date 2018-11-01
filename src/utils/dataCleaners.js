import { initialCongressFetch, initialSenateFetch } from './ApiCals';

export const congressData = async (data) => {
    const congressmen = await initialCongressFetch()
    const eachMember = congressmen.results.reduce((membersData, member) => {
        membersData.push({
            name: member.name,
            party: member.party,
            title: member.role
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
            title: senator.role
        });
        return senateData;
      }, []);
      return eachSenator;
}
