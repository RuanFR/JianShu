import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./statics/iconfont/iconfont.eot?t=1570540768009'); /* IE9 */
  src: url('./statics/iconfont/iconfont.eot?t=1570540768009#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAU0AAsAAAAACjAAAAToAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDdAqGaIVwATYCJAMgCxIABCAFhG0HXBveCBEVpC2R/RhwN873RGVqYqLyWp0LLaFQmZn5I6iWrWd3Lzw5KRSc4z2xPEKRJQqhKCTZSRxG41BZ2HT8e9m8pEy6Ka2gMO+uwtcJKvwl7J6AfffLG1BnTNTkZ3V25NEXkl5/8aUZ/f2hauZ5LiDzWbJd/s+cs5vK5QIVaKyFpQoOkAWoBbA+dBuzCoyKy76dwIAVZtBeQBgNYgrcLxDn+bnpIFawKR200BrrhlMLxCMIa1MPNgPgIfr8+AabEANJlQEP3c/xzwKvZ3IvovF1/9dJCgggX84DeVsyOqBYXt7ouwY8yXVwA2alkAMAY/Qbcd7knqk8c3i259nBZ+dfRP//r0yCLiaNwb94oJLVikZIRA2oG+LUs3zDm5zHpeJNhUvmzYFLzdseLoW3gzJLfx64BB/RPRJog1PGgAXgB8QFoKEfndFKQpEUVQaGtLQCJfQYBQkxMXlSVJqUE6+lWYaITyBZmiOSEwgUX59Hk3Rcbi09tAorKzSiGSQQcC18ls1XrVuN5ob5WhfUTq6YneYHaBH11VVGvusexOc3Ur2DSkIcr28E4S3DcRKIh7xIfc6IoFXD9sZyZ5/AM3tT34mWhik4j2velM+XJFgJmigk4xM2axA7leLSB8g+gIEgRoneOdTCcS1Erxtz8SisO0b2TSBUKnFQj7elpYTYtNRlFY8YHjHdckaV3bjCzRC9DgKBqfvGrbWFy7ldXQmbOUky6wZ8JwSeIxznq6AgR5dzV1RY3ZHYk9ITdWwmuy1l+3BKb1ULHDpw3S63977icmLPdELP0j0F8SqBvfB7MD7+rmWlN9Z18WIX5rUW3+U1JPTnj9BQou++3618+f9BbXBqtizedmDAO6yMQ9XViDP75tI2cKMmnFCAkvA3M8Q1bArWV/dsNGp59f39b0KzxmFPJPPQ4cDDuocDUHQouB6JUlSyUakntmFiYgNOKMD+ZddPTG7APMuMVylqm4qtiv3Db3j7mTPtTI2DF2vHMhwi+GtgNCdw0chvMZv6bx75BR6RDOaTke8hEPrtUVk15WSJhL0tSo3ZfF4yGerl8iSFq5pWlv+tov9RXwMqlE3/fCpsVJw5plvlEItRC5/+HN/QOVEREqJ4rPAiHhRk3hgok+W00S//oVHLiatjPZqdpbe6tuAhIVhd3amSLtialliYCzODM90DJ2a2Qirgi/Iptgvg/39ei80BkA+x+wD/Y3kU926ij+IQeMV+/Kdf42l8XCpV0u2rGCkE8DJ+6n7U8L+uQL6883qD5X+lfOCSYinR3hZjbp5NLGXYemmZhAFaxb8YmnBvScP0YBphmM4gaSxD1lolFmoHlUF9qLU2YcC6wLMHTaoAXBRxYE0HgzDmDCQjniEbM0ss1LtQmfEWamOBA0z5CtlL3nuIoHwZtaAD8w/B1kKuU1Tc/Ib+O2nOKyPGF3IPSZiHqVx8xYK8xBH9xy8iBMQ1wwu7G6ZUoXHd0cpwEmnHcaSmVxpszQflEUOaQA4w/oHAqgoK1haq8vFvkPct0bhjqin5BbEubBzMBtMA4quuDJp6lK27H95CCBL2IqzKwAt4UKJcBVrzTjtkicFpQqY5GvlKNFQ3bG/IV3odDMDntIEhHAkhYSSCRJEYEofzjfmyt1CuzuGw7VKHbVGki3d6D8F25976qlhXEw4H') format('woff2'),
  url('./statics/iconfont/iconfont.woff?t=1570540768009') format('woff'),
  url('./statics/iconfont/iconfont.ttf?t=1570540768009') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./statics/iconfont/iconfont.svg?t=1570540768009#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`