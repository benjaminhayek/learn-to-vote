import { fetchCongress, fetchSenators, getBills } from './Thunks';
import { addCongressmen, contentStatus, addSenators, getEducation, toggleSelected } from './index';
import { congressData } from '../utils/dataCleaners';

describe('Thunks', () => {
    describe('fetchCongress', () => {
        let mockUrl
        let mockDispatch
        
        beforeEach(() => {
          mockUrl = 'www.gov.com'
          mockDispatch = jest.fn()
        })
        
        it('calls dispatch with the contentStatus action', () => {
          const thunk = fetchCongress(mockUrl)
          
          thunk(mockDispatch)
          
          expect(mockDispatch).toHaveBeenCalledWith(contentStatus('loading'))
        })
      })


      it('should dispatch fetchCongress with the correct params', async () => {
        jest.mock('./Thunks')
        const mockCongress = { 
          name: 'doug',
          party: 'D',
          title: 'member',
          id: '1',
          nextElection: '2020',
          selected: false,
      }
        let status = 'resolved'
        let mockUrl = `https://api.propublica.org/congress/v1/members/house/CO/current.json`
        let mockDispatch = jest.fn()
        
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 'loading',
          json: () => Promise.resolve({
            members: mockCongress
          })
        }))

        const thunk = fetchCongress(mockUrl, status)
        
        await thunk(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(addCongressmen(mockCongress))
      })

      // it('should dispatch getBills with the correct params', async () => {
      //   jest.mock('./Thunks')
      //   const mockBill = { 
      //     title: 'bil;',
      //     committee: 'committee',
      //     url: 'www.gov.com'
      // }
      //   let mockUrl = `https://api.propublica.org/congress/v1/members/house/CO/current.json`
      //   let mockDispatch = jest.fn()
        
      //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      //     status: 'loading',
      //     json: () => Promise.resolve({
      //       bills: mockBill
      //     })
      //   }))

      //   const thunk = getBills(mockUrl)
        
      //   await thunk(mockDispatch)

      //   expect(mockDispatch).toHaveBeenCalledWith(addCongressmen(mockBill))
      // })
      
})