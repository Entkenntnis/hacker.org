require('@entkenntnis/challenges-server')((config) => {
  config.brand = 'hacker.org'
  config.slogan = 'Prove your skill.'

  // reusing hack the web styles
  config.theme = 'darkly'
  config.styles.textColor = 'white'
  config.styles.connectionColor = '#464545'
  config.styles.pointColor_solved = '#666699'
  config.styles.hrColor = '#313030'
  config.styles.solutionClass_correct = 'primary'
  config.styles.tableHighlightClass = 'secondary'
  config.map.centeringOffset = 0.5

  config.map.background = '/map.png'

  config.i18nExtend.push({
    lng: 'en',
    key: 'privacy.content_',
    value: `
      <h3 class="my-4">Personal data</h3>
      
      <p>We take the protection of your personal data very seriously. You can use the services of this site without disclosing personal data. The registration works without giving an e-mail address, instead you give a pseudonym of your choice. If you wish to remain anonymous, please note that the pseudonym cannot be used to identify you personally.
      </p>
      
      <h3 class="my-4">Account data</h3>
      
      <p>Your username will be publicly displayed in the highscore and possibly also on the start page. The time of the last activity on the platform is saved and also displayed. For each task you can also see how many users have already solved it (without tracing back to a single user). You can delete your account completely in your profile at any time. The operator reserves the right to change or delete accounts without notice.
      </p>
      
      <h3 class="my-4">Cookies</h3>
      
      <p>When you register or log in to this site, the site sets a cookie with a session ID. This is needed to maintain your login status and does not require any special permission. The cookie is usually deleted automatically when you close the browser window. A tracking does not take place with it.
      </p>
      
      <h3 class="my-4">Google Fonts</h3>
      
      <p>This website uses Google Fonts. For more information visit their <a href="https://developers.google.com/fonts/faq" target="_blank">FAQ</a>.
      </p>
    `,
  })

  config.i18nExtend.push({
    lng: 'en',
    key: 'contact.content_',
    value: `
      <p class="my-5">
        TODO
      </p>
    `,
  })

  config.i18nExtend.push({
    lng: 'en',
    key: 'home.version',
    value: '',
  })

  return config
})
