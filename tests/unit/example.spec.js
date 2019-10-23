import { shallowMount } from '@vue/test-utils'
import signin from '@/views/auth/signin'


describe('signin', () => {
  it('отрисовывает сообщение и правильно реагирует на пользовательский ввод', () => {
    const wrapper = shallowMount(signin, {
      data: () => ({
        form:{
          login: 'check',
          password: ''
        }       
      })
    })
    // посмотреть, отобразилось ли сообщение
    expect(wrapper.find('.form_auth input[type="text"]').element.value).toEqual('check')

    // обновить `username` и проверить, что ошибка больше не отрисовалась
    // wrapper.setData({ username: 'Александр' })
    // expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})