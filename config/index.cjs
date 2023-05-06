/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx11a416c83e6eb490',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2b77d15c88f2704f228f90a0e854a6e6',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '明悦',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_Qw_5pHgvzS1KlZBeNcrRwMvewU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0CtVauG9A_27f6W5RuIoc46k2uNETzeui1ySKMnQVn4',
      // 所在省份或城市，也可以不填
      province: '上海',
      // 所在城市或县区
      city: '上海',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-22',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '09-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '宝贝', year: '1997', date: '10-22',
//         },
        {
          type: '节日', name: '恋爱纪念日', year: '2022', date: '06-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-06-24' },
      ],
    },
    
    // 第二个人
        {
      // 想要发送的人的名字
      name: '春辰',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_Qw_5rdf-RxKrSx0dvQJh-J840g',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'O6nlQF7426IN5-uX7NgXJaE7YJ-6M0uT-9FfhHoRrHY',
      // 所在省份或城市，也可以不填
      province: '上海',
      // 所在城市或县区
      city: '上海',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '1-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '12-21',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '宝贝', year: '1998', date: '1-19',
//         },
        {
          type: '节日', name: '恋爱纪念日', year: '2022', date: '06-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-03-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-06-24' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yiGIoYGBsPMqN7OHIkY5fCHaxk92Syv-KrwUEsmCVJI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_Qw_5rdf-RxKrSx0dvQJh-J840g',
    }
  ],

}

module.exports = USER_CONFIG

