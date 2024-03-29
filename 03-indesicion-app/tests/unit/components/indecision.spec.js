import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe("Indecision-App", () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        answer: "yes",
        forced: false,
        image: "https://yesno.wtf/assets/yes/2.gif"
      }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");

    jest.clearAllMocks();
  });

  test("Debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Escribir en el input no debe disparar nada", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");

    await input.setValue("Hola mundo");

    expect(clgSpy).toHaveBeenCalled();

    // expect( clgSpy ).toHaveBeenCalledTimes(1)

    expect(getAnswerSpy).not.toHaveBeenCalled();

    // console.log(wrapper.vm);
  });

  test("Al escribir ? se dispara el fetch", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");

    await input.setValue("Hola mundo?");

    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("Pruebas en getAnswer", async () => {

    await wrapper.vm.getAnswer();

    const img = wrapper.find('img')

    expect(img.exists()).toBeTruthy()
    expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif")
    expect(wrapper.vm.answer).toBe("Si!")

  });

  test("Pruebas en getAnswer - Fallo en el API", async() => {

    fetch.mockImplementationOnce( () => Promise.reject('API error') )

    await wrapper.vm.getAnswer()

    console.log(wrapper.vm.answer);

    const img = wrapper.find('img')
    expect(img.exists()).toBeFalsy()
    expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

  });
});
