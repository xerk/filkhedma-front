import { mount } from '@vue/test-utils'
import jobsComponent from '@/views/Job/jobs.vue'
import { describe } from 'vitest'

describe('Main Jobs Component', async() => {
  it('check component in build', async() => {
    expect(jobsComponent).toBeTruthy()
  });
});