import { mount } from '@vue/test-utils'
import JobItem from '@/views/Job/components/JobItem.vue'
import { describe } from 'vitest'

describe('Job Details Component', async() => {
  it('check is component is build', async() => {
    expect(JobItem).toBeTruthy()
  })
})