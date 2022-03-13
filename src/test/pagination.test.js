import { mount } from '@vue/test-utils'
import Pagination from '../components/Pagination.vue'

test('check trigger and emmits', async() => {
  expect(Pagination).toBeTruthy()

  const wrapper = mount(Pagination, {
    props: {
      perPage: 25,
    }
  })
  expect(wrapper.props().perPage).toBe(25)
  await wrapper.get('a').trigger('click')
  expect(wrapper.emitted()).toHaveProperty('pagechanged')

})