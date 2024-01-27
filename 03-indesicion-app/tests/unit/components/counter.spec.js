import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  // test('Debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount(Counter);
  //   expect( wrapper.html() ).toMatchSnapshot( )
  // })

  test("h2 debe tener el valor por defecto", () => {
    expect(wrapper.find("h2").exists()).toBe(true);

    const h2 = wrapper.find("h2").text();

    expect(h2).toBe("Counter");
  });

  test("El valor por defecto debe ser 100 en el segundo p", () => {
    // const pTags = wrapper.findAll('p')

    const pValue = wrapper.find('[data-testid="counter"]').text();

    // expect(pTags[1].text()).toBe('0')

    expect(pValue).toBe("0");
  });

  test("Debe incrementar y decrementar el contador", async () => {
    const Btns = wrapper.findAll("button");

    await Btns[0].trigger("click");
    await Btns[0].trigger("click");
    await Btns[0].trigger("click");
    await Btns[0].trigger("click");

    let pValue = wrapper.find('[data-testid="counter"]').text();

    expect(pValue).toBe("4");

    await Btns[1].trigger("click");
    await Btns[1].trigger("click");

    pValue = wrapper.find('[data-testid="counter"]').text();

    expect(pValue).toBe("2");
  });

  test("Debe incrementar y decrementar el contador", async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");

    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");
    await increaseBtn.trigger("click");

    let pValue = wrapper.find('[data-testid="counter"]').text();

    expect(pValue).toBe("4");

    await decreaseBtn.trigger("click");
    await decreaseBtn.trigger("click");

    pValue = wrapper.find('[data-testid="counter"]').text();

    expect(pValue).toBe("2");
  });

  test("Debe establecer el valor por defecto", () => {
    const { start } = wrapper.props();

    const value = wrapper.find('[data-testid="counter"]').text();

    expect(value).toBe(start.toString());
  });

  test("Debe de mostrar la prop title", () => {

    const title = "Titulo"

    const wrapper = shallowMount(Counter, {
      props: {
        title: "Titulo",
        // start: "5"
      }
    });

    expect(wrapper.find('h2').text()).toBe(title)
  });
});
