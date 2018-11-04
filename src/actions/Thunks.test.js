import { fetchCongress, fetchSenators, getBills } from './Thunks';
import { addCongressmen, contentStatus, addSenators, getEducation, toggleSelected } from './index';

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

      jest.mock('./Thunks')

      it('should dispatch fetchCongress with the correct params', async () => {
        const mockCongress = ['Bill', 'Jill']
        let mockUrl = 'www.gov.com'
        let mockDispatch = jest.fn()
        
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            members: mockCongress
          })
        }))
        
        const thunk = fetchCongress(mockUrl)
        
        await thunk(mockDispatch)
        
        expect(mockDispatch).toHaveBeenCalledWith(addCongressmen(mockCongress))
      })
      
})