import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter';


describe('Counter Component', ()=> {

  // test('Debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount(Counter);
  //   expect( wrapper.html() ).toMatchSnapshot( )
  // })

  test('h2 debe tener el valor por defecto', () => { 
    const wrapper = shallowMount(Counter);

    expect(wrapper.find('h2').exists()).toBe(true)

    const h2 = wrapper.find('h2').text();

    expect(h2).toBe('Counter');
  })

  
  test('El valor por defecto debe ser 100 en el segundo p', () => { 
    
    const wrapper = shallowMount(Counter)

    // const pTags = wrapper.findAll('p')
    
    const pValue = wrapper.find('[data-testid="counter"]').text()

    // expect(pTags[1].text()).toBe('0')

    expect(pValue).toBe('0')

  })


  test('Debe incrementar en 1 el valor del contador', async() => { 

    const wrapper = shallowMount(Counter)

    const Btns = wrapper.findAll('button')

    await Btns[0].trigger('click')
    await Btns[0].trigger('click')
    await Btns[0].trigger('click')
    await Btns[0].trigger('click')

    let pValue = wrapper.find('[data-testid="counter"]').text()

    expect(pValue).toBe('4')

    await Btns[1].trigger('click')
    await Btns[1].trigger('click')

    pValue = wrapper.find('[data-testid="counter"]').text()

    expect(pValue).toBe('2')

  })

})