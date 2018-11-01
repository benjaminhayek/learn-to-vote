import { initialCongressFetch } from './ApiCals';

export const congressData = async (data) => {
    const congressmen = await initialCongressFetch()
    const eachMember = congressmen.results.reduce((membersData, member) => {
        membersData.push({
            firstName: member.first_name,
            lastName: member.last_name,
            party: member.party,
            title: member.role
        });
        return membersData;
      }, []);
      return eachMember;
}

export const congressData = async (data) => {
    const congressmen = await initialFetch()
    const eachMember = congressmen.results.reduce((membersData, member) => {
        membersData.push({
            firstName: member.first_name,
            lastName: member.last_name,
            party: member.party,
            title: member.role
        });
        return membersData;
      }, []);
      return eachMember;
}
