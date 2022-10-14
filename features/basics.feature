Feature: Playwright basic demo

Scenario: User can open application and see multiple screens
  Given User view 'institute'
  When User clicks Add Institute
  Then User see expectd form header