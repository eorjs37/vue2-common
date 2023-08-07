import { shallowMount, createLocalVue } from "@vue/test-utils";
import CounterComponent from "@/components/CounterComponent.vue";
import Plugins from "@/plugins/Plugins";


describe('Name of the group', () => {
  const transitionStub = () => ({
    render: function () {
      return this.$options._renderChildren
    }
  })

  test('increments counter value on click', async () => {
    const wrapper = shallowMount(CounterComponent);
    const button = wrapper.find('button');
    const text = wrapper.find('p');

    await button.trigger("click");

    expect(text.text()).toContain('Total clicks: 1');
  });

  test("emited foo", () => {
    const wrapper = shallowMount(CounterComponent);
    wrapper.vm.$emit('foo')
    // assert event has been emitted
    expect(wrapper.emitted().foo).toBeTruthy()
  });

  test('manipulates state', async () => {
    const wrapper = shallowMount(CounterComponent);
    await wrapper.setData({ count: 10 });
    const text = wrapper.find('.count');

    expect(text.text()).toContain('Total clicks: 10');
  });

  test("manipulates state", async () => {
    const wrapper = shallowMount(CounterComponent);
    await wrapper.setProps({ foo: 'bar' });
    const text = await wrapper.find('.foo');

    expect(text.text()).toContain('bar');
  });

  test("mocking props", async () => {
    const wrapper = shallowMount(CounterComponent, {
      propsData: {
        foo: "mocksfoo"
      }
    });
    const text = await wrapper.find('.foo');
    expect(text.text()).toContain('mocksfoo');
  })

  test('mocking Transitions', async () => {
    const wrapper = shallowMount(CounterComponent, {
      stubs: {
        transition: transitionStub()
      }
    })

    expect(wrapper.text()).toMatch(/Foo/)
    await wrapper.setData({
      show: false
    });

    expect(wrapper.text()).not.toMatch(/Foo/);
  });

  test('avoid setdata', async () => {
    const wrapper = shallowMount(CounterComponent, {
      data() {
        return {
          show: true
        }
      }
    });
    expect(wrapper.text()).toMatch(/Foo/)

  });

  test('should not render Foo', async () => {
    const wrapper = shallowMount(CounterComponent, {
      data() {
        return {
          show: false
        }
      }
    })

    expect(wrapper.text()).not.toMatch(/Foo/)
  })

  test('custom global plugin', async () => {
    const localVue = createLocalVue();
    localVue.use(Plugins);
    const wrapper = shallowMount(CounterComponent, {
      localVue,
      attachTo: document.body
    });
    await wrapper.vm.$TestPlugin.setEl();
    wrapper.vm.$TestPlugin.getEl()
  });


  test('test plugins', async () => {
    const localVue = createLocalVue();
    localVue.use(Plugins);
    const wrapper = shallowMount(CounterComponent, {
      localVue
    });

    const result = await wrapper.vm.$MyPlugins.getPrivateValue(1);
    expect(result).toBe(1)
  });
});
