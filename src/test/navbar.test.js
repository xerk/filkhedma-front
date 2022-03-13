import { mount } from '@vue/test-utils'
import GithubNavbar from '../components/GithubNavbar.vue'

test('check trigger ', async() => {
  expect(GithubNavbar).toBeTruthy()
  const wrapper = mount(GithubNavbar)
  await wrapper.get('button').trigger('click')
})