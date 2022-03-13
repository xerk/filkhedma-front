import { mount } from '@vue/test-utils'
import ListingIssuesHeader from '../components/ListingIssuesHeader.vue'

test('check trigger and emmits', async() => {
  expect(ListingIssuesHeader).toBeTruthy()

  const wrapper = mount(ListingIssuesHeader, {
    props: {
      isActive: false,
      isClosedActive: false,
    }
  })
  expect(wrapper.props().isActive).toBe(false)
  expect(wrapper.props().isClosedActive).toBe(false)
  await wrapper.get('a').trigger('click')
  expect(wrapper.emitted()).toHaveProperty('getIssues');
})