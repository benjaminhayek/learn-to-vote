import { fetchCongress, fetchSenators, getBills } from './Thunks';
import { addCongressmen, contentStatus, addSenators, getEducation, toggleSelected } from './index';
import { memberData } from '../utils/dataCleaners';

jest.mock('../utils/dataCleaners', () => ({
  memberData: jest.fn().mockImplementation(() => Promise.resolve([]))
}))

jest.mock('../utils/ApiCals', () => ({
  getEducationBills: jest.fn().mockImplementation(() => Promise.resolve([]))
}))



describe('Thunks', () => {
    describe('fetchCongress', () => {
        let mockUrl
        let mockDispatch
        
        beforeEach(() => {
          mockUrl = 'www.gov.com'
          mockDispatch = jest.fn()
        })

        it.skip('should dispatch contentStatus error if the response is not ok', async () => {
          window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: false
          }))
          
          const thunk = fetchCongress(mockUrl)
          
          await thunk(mockDispatch)
          
          expect(mockDispatch).toHaveBeenCalledWith(contentStatus('error'))
        })
        
        it('calls dispatch with the contentStatus action', () => {
          const thunk = fetchCongress(mockUrl)
          
          thunk(mockDispatch)
          
          expect(mockDispatch).toHaveBeenCalledWith(contentStatus('loading'))
        })
      })


      it('should dispatch fetchCongress with the correct params', async () => {
        const mockCongress = []
        let mockDispatch = jest.fn()

        const thunk = fetchCongress(mockCongress)
        
        await thunk(mockDispatch)

        expect(mockDispatch).toHaveBeenCalledWith(addCongressmen(mockCongress))
      })

      describe('fetchSenators', () => {
        let mockUrl
        let mockDispatch
        
        beforeEach(() => {
          mockUrl = 'www.gov.com'
          mockDispatch = jest.fn()
        })
        
        it('calls dispatch with the contentStatus action', () => {
          const thunk = fetchSenators(mockUrl)
          
          thunk(mockDispatch)
          
          expect(mockDispatch).toHaveBeenCalledWith(contentStatus('loading'))
        })

        it('should dispatch fetchSenate with the correct params', async () => {
          const mockSenate = []
          let mockDispatch = jest.fn()
  
          const thunk = fetchSenators(mockSenate)
          
          await thunk(mockDispatch)
  
          expect(mockDispatch).toHaveBeenCalledWith(addSenators(mockSenate))
        })
      })
})