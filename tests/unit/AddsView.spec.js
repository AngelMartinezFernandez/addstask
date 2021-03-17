import {shallowMount} from '@vue/test-utils'
import AddsView from '@/views/AddsView'
import AdForm from '@/components/AdForm'
import AdList from '@/components/AdList'

describe('AddsView', () =>{
    it('it renders the component', () => {
        const wrapper = shallowMount(AddsView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('it renders right components', () =>{
        const wrapper = shallowMount(AddsView)
        const form = wrapper.findComponent(AdForm)
        const ad = wrapper.findComponent(AdList)

        expect(form.exists()).toBe(true)
        expect(ad.exists()).toBe(true)
    })
})