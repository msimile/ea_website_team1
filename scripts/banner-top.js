const mediaQuery = window.matchMedia("(max-width: 1024px)")

const bannerTop = document.querySelector(".banner-top")

const bgImageChild = `<div class="banner-top__contents">
<div class="banner-top__contents__svg">
  <svg xmlns="http://www.w3.org/2000/svg" width="382" height="116" viewBox="0 0 382 116" fill="none">
    <path d="M54.2489 27.3076C37.5923 27.3076 24.0884 40.8102 24.0884 57.4667C24.0884 74.1246 37.5923 87.6272 54.2489 87.6272C70.9055 87.6272 84.408 74.1246 84.408 57.4667C84.408 40.8102 70.9054 27.3076 54.2489 27.3076Z" fill="black"/>
    <path d="M74.0858 62.3217H74.8533V62.4571H74.5461V63.1109H74.3918V62.4571H74.0859V62.3217H74.0858ZM38.1114 65.3525H36.3747C35.9835 65.3525 35.7913 65.1386 35.7913 64.7109V64.026C35.7913 63.8297 35.8387 63.6713 35.951 63.5427C36.0552 63.4155 36.196 63.3518 36.3747 63.3518H37.7365C38.0573 63.3518 38.2766 63.5061 38.3741 63.8215L38.5623 64.4848H39.8104V63.7538C39.8104 63.2665 39.6507 62.8658 39.3217 62.5396C38.9901 62.2174 38.584 62.055 38.1115 62.055H36.0932C35.6194 62.055 35.2066 62.2229 34.8641 62.5613C34.5311 62.8984 34.3633 63.3031 34.3633 63.7742V64.9505C34.3633 65.431 34.5311 65.8385 34.8641 66.1796C35.2066 66.518 35.6194 66.6845 36.0932 66.6845H37.8313C38.2157 66.6845 38.408 66.9065 38.408 67.3437V68.2344C38.408 68.4226 38.3565 68.5877 38.2537 68.7109C38.1441 68.8409 38.0033 68.9031 37.8314 68.9031H36.4493C36.1001 68.9031 35.8875 68.7434 35.8036 68.4347L35.6195 67.6861H34.3633V68.4942C34.3633 68.9883 34.523 69.389 34.8493 69.7138C35.1742 70.0373 35.5803 70.2011 36.0662 70.2011H38.1116C38.584 70.2011 38.9969 70.0305 39.3339 69.6908C39.6669 69.3578 39.8334 68.9477 39.8334 68.4644V67.0864C39.8334 66.6153 39.6669 66.2106 39.3258 65.8668C38.9873 65.5231 38.5812 65.3525 38.1114 65.3525ZM46.4377 62.5613C46.772 62.8943 46.9426 63.3017 46.9426 63.7701V65.4811C46.9426 65.9603 46.772 66.3677 46.4377 66.7034C46.0925 67.0405 45.681 67.211 45.2032 67.211H42.9589V70.2012H41.52V62.055H45.2033C45.681 62.0551 46.0925 62.2229 46.4377 62.5613ZM45.5023 64.0381C45.5023 63.8391 45.4454 63.6848 45.3371 63.5576C45.2315 63.4304 45.0894 63.3694 44.9229 63.3694H42.9588V65.8966H44.9229C45.0894 65.8966 45.2315 65.833 45.3371 65.7084C45.4454 65.5798 45.5023 65.4228 45.5023 65.2265V64.0381ZM59.836 66.8348L61.2641 70.2013H59.7331L58.4065 67.0135H57.0407V70.2013H55.5991V62.0551H59.2011C59.683 62.0551 60.0931 62.223 60.4261 62.5614C60.7631 62.8944 60.9337 63.3032 60.9337 63.7702V65.1902C60.9337 65.5597 60.8322 65.8968 60.6291 66.1932C60.4167 66.4882 60.1487 66.6967 59.836 66.8348ZM59.4895 64.0381C59.4895 63.8445 59.4394 63.6848 59.3352 63.5576C59.231 63.4304 59.0916 63.3694 58.9264 63.3694H57.0408V65.7004H58.9264C59.0916 65.7004 59.231 65.6395 59.3352 65.5204C59.4394 65.3945 59.4895 65.2361 59.4895 65.0426V64.0381ZM61.8421 63.3694H63.9118V70.2012H65.3534V63.3694H67.4448V62.055H61.8421V63.3694ZM72.2381 65.3525H70.5041C70.1196 65.3525 69.9234 65.1386 69.9234 64.7109V64.026C69.9234 63.8297 69.9775 63.6713 70.0818 63.5427C70.1847 63.4155 70.3295 63.3518 70.5042 63.3518H71.8714C72.1922 63.3518 72.4061 63.5061 72.5062 63.8215L72.6944 64.4848H73.9479V63.7538C73.9479 63.2665 73.7801 62.8658 73.4538 62.5396C73.1221 62.2174 72.7201 62.055 72.2382 62.055H70.2267C69.7475 62.055 69.3346 62.2229 69.0017 62.5613C68.6673 62.8984 68.4927 63.3031 68.4927 63.7742V64.9505C68.4927 65.431 68.6673 65.8385 69.0017 66.1796C69.3347 66.518 69.7475 66.6845 70.2267 66.6845H71.9607C72.3506 66.6845 72.5401 66.9065 72.5401 67.3437V68.2344C72.5401 68.4226 72.4886 68.5877 72.3858 68.7109C72.2802 68.8409 72.1354 68.9031 71.9607 68.9031H70.5813C70.2334 68.9031 70.0236 68.7434 69.9356 68.4347L69.7475 67.6861H68.4927V68.4942C68.4927 68.9883 68.6578 69.389 68.9814 69.7138C69.3117 70.0373 69.7137 70.2011 70.1997 70.2011H72.2383C72.7202 70.2011 73.1303 70.0305 73.4701 69.6908C73.8044 69.3578 73.9736 68.9477 73.9736 68.4644V67.0864C73.9736 66.6153 73.8044 66.2106 73.4538 65.8668C73.1193 65.5231 72.7119 65.3525 72.2381 65.3525ZM75.7914 62.3217L75.4801 62.7982L75.1715 62.3217H75.0388V63.1109H75.1715V62.6236C75.1715 62.5965 75.1552 62.5695 75.1552 62.5383C75.1715 62.5654 75.1904 62.5965 75.2026 62.6168L75.4598 63.0107H75.4842L75.7346 62.6236C75.7549 62.5965 75.759 62.5695 75.7725 62.5383C75.7684 62.5776 75.7684 62.6033 75.7684 62.6236V63.1109H75.9105V62.3217H75.7914ZM53.3331 62.5559C53.6796 62.8848 53.8434 63.2977 53.8434 63.7701V68.4524C53.8434 68.9478 53.6796 69.358 53.3331 69.691C52.9933 70.0308 52.5913 70.2013 52.1067 70.2013H50.1615C49.6755 70.2013 49.2654 70.0307 48.927 69.691C48.5899 69.358 48.418 68.9479 48.418 68.4524V63.7701C48.418 63.3031 48.5899 62.8943 48.927 62.5613C49.2654 62.2229 49.6756 62.055 50.1615 62.055H52.1067C52.5914 62.0551 52.9934 62.2229 53.3331 62.5559ZM52.4073 64.0381C52.4073 63.8445 52.3531 63.6848 52.2408 63.5576C52.1352 63.4304 51.9944 63.3694 51.8279 63.3694H50.4472C50.2672 63.3694 50.1291 63.4303 50.0208 63.5576C49.9166 63.6848 49.8665 63.8446 49.8665 64.0381V68.2141C49.8665 68.4036 49.9166 68.5606 50.0208 68.6879C50.1291 68.8206 50.2672 68.8882 50.4472 68.8882H51.8279C51.9944 68.8882 52.1352 68.8205 52.2408 68.6879C52.3531 68.5607 52.4073 68.4036 52.4073 68.2141V64.0381ZM58.4811 41.2645H42.9764L40.6062 45.0357L56.1041 45.0262L58.4811 41.2645ZM64.3545 52.5687H62.0303L59.6452 56.3467H66.7369L69.1193 60.1139H73.6472L61.6512 41.1345L52.0146 56.3494H41.4739L43.8928 52.5741H50.439L52.8255 48.8042H38.2238L35.8387 52.5741H39.3446L34.569 60.1193L54.2036 60.1139L61.6513 48.2844L64.3545 52.5687Z" fill="white"/>
    <path d="M344.912 42.01H321.499C321.46 42.01 317.546 42.0554 317.546 45.9647V69.3771C317.546 69.4168 317.591 73.3318 321.499 73.3318H344.912C344.952 73.3318 348.866 73.2864 348.866 69.3771V45.9647C348.866 45.925 348.821 42.01 344.912 42.01ZM348.091 69.3771C348.091 72.4875 345.04 72.5543 344.912 72.5554H321.499C318.389 72.5554 318.323 69.5049 318.321 69.3771V45.9647C318.321 42.8604 321.361 42.7879 321.501 42.7864H344.912C348.022 42.7864 348.089 45.8372 348.091 45.9647V69.3771H348.091Z" fill="black"/>
    <path d="M327.511 56.7028V58.5936H328.013V56.662C328.013 56.3839 328.127 56.2929 328.413 56.2929H329.183V55.8601H328.436C327.899 55.8601 327.511 56.1469 327.511 56.7028Z" fill="black"/>
    <path d="M325.525 55.8008C324.673 55.8008 324.29 56.2383 324.29 57.0035V57.4499C324.29 58.2154 324.673 58.6527 325.525 58.6527H325.866C326.677 58.6527 327.101 58.2153 327.101 57.4499V57.0035C327.101 56.2383 326.677 55.8008 325.866 55.8008H325.525ZM326.577 56.9351V57.5182C326.577 58.0058 326.422 58.2199 325.93 58.2199H325.456C324.991 58.2199 324.814 58.0058 324.814 57.5182V56.9351C324.814 56.4476 324.991 56.2335 325.456 56.2335H325.93C326.422 56.2335 326.577 56.4476 326.577 56.9351Z" fill="black"/>
    <path d="M335.284 58.5936H336.824V55.8601H336.323V58.138H335.248C334.924 58.138 334.797 58.0287 334.797 57.6688V55.8601H334.296V57.614C334.296 58.2563 334.597 58.5936 335.284 58.5936Z" fill="black"/>
    <path d="M342.023 58.1378V58.5935H344.493V58.1378H343.582V55.7779C343.582 55.3724 343.413 55.1765 343.003 55.1765H342.128V55.6322H342.921C343.012 55.6322 343.058 55.6869 343.058 55.7827V58.1379H342.023V58.1378Z" fill="black"/>
    <path d="M344.967 58.5929V58.2063H345.111V58.1375H344.743V58.2063H344.887V58.5929H344.967Z" fill="black"/>
    <path d="M345.635 58.5929V58.1375H345.524L345.402 58.4939H345.401L345.275 58.1375H345.163V58.5929H345.239V58.2413H345.24L345.366 58.5929H345.432L345.558 58.2413H345.559V58.5929H345.635Z" fill="black"/>
    <path d="M323.939 55.6322V55.1765H321.337V58.5936H321.861V57.0855H323.939V56.6301H321.861V55.6322H323.939Z" fill="black"/>
    <path d="M338.324 57.942C338.324 58.3884 338.634 58.5935 339.158 58.5935H340.911V56.8485C340.911 56.2427 340.574 55.8599 339.877 55.8599H338.47V56.2927H340.146L338.934 57.1628C338.547 57.4408 338.324 57.6457 338.324 57.942ZM340.41 56.6435V58.1378H339.135C338.975 58.1378 338.843 58.074 338.843 57.9238C338.843 57.7643 338.943 57.7006 339.116 57.5774L340.41 56.6435Z" fill="black"/>
    <path d="M333.785 58.5935V56.7847C333.785 56.2427 333.484 55.8599 332.801 55.8599H329.639V58.5935H330.14V56.3154H331.462V58.5935H331.963V56.3154H332.833C333.156 56.3154 333.284 56.4204 333.284 56.7621V58.5935H333.785V58.5935Z" fill="black"/>
    <path d="M337.881 55.1765H337.38V58.5934H337.881V55.1765Z" fill="black"/>
    <path d="M338.713 49.0813H331.033C328.993 49.0813 328.674 49.2373 327.749 50.1625L325.393 52.5182H328.58L329.338 51.7598C329.839 51.2589 330.063 51.211 331.073 51.211H336.584L338.713 49.0813Z" fill="black"/>
    <path d="M327.467 49.9042C328.528 48.8742 328.959 48.7182 330.984 48.7182H339.06L341.384 46.4429H330.678C327.967 46.4429 327.2 46.7011 325.611 48.2742L321.335 52.5181H324.772L327.467 49.9042Z" fill="black"/>
    <path d="M339.544 52.5182L345.636 46.4429H341.852L335.777 52.5182H339.544Z" fill="black"/>
    <path d="M344.912 61.1602L321.511 61.1604C321.443 61.1636 320.836 61.1998 320.292 61.4993C319.899 61.7154 319.377 62.1355 319.377 63.2826L319.377 69.3661C319.381 69.4337 319.417 70.0412 319.716 70.5854C319.932 70.9779 320.352 71.4997 321.5 71.4997L344.901 71.4995C344.968 71.4963 345.576 71.4601 346.12 71.1605C346.513 70.9445 347.035 70.5246 347.035 69.3773L347.034 63.2938C347.031 63.2263 346.995 62.6187 346.695 62.0745C346.479 61.6821 346.059 61.1602 344.912 61.1602ZM346.65 69.3773C346.65 70.3047 346.288 70.6287 345.935 70.8234C345.466 71.0811 344.941 71.1123 344.892 71.1148H321.5C320.572 71.1148 320.248 70.7534 320.053 70.3997C319.796 69.9317 319.765 69.4066 319.762 69.3572V63.2827C319.762 62.3553 320.124 62.0312 320.477 61.8365C320.945 61.579 321.47 61.5477 321.52 61.5451H344.912C345.84 61.5451 346.164 61.9066 346.358 62.2602C346.616 62.7282 346.647 63.2533 346.65 63.3027V69.3773H346.65Z" fill="black"/>
    <path d="M323.826 65.2649H322.204V62.7744H321.352V65.9674H323.826V65.2649Z" fill="black"/>
    <path d="M325.103 62.7744H324.251V65.9674H325.103V62.7744Z" fill="black"/>
    <path d="M326.614 65.1094C326.515 65.0058 326.465 64.8348 326.465 64.5964V64.1452C326.465 63.9068 326.513 63.7358 326.61 63.6322C326.706 63.5287 326.887 63.4768 327.151 63.4768H328.321V62.7744H327.108C326.855 62.7744 326.633 62.8064 326.44 62.8702C326.247 62.9341 326.086 63.0249 325.959 63.1427C325.831 63.2605 325.734 63.4039 325.669 63.5727C325.604 63.7415 325.571 63.9296 325.571 64.1368V64.6051C325.571 64.8123 325.604 65.0003 325.669 65.1692C325.734 65.3381 325.831 65.4814 325.959 65.5991C326.086 65.7169 326.247 65.8078 326.44 65.8716C326.633 65.9355 326.856 65.9674 327.108 65.9674H328.343V65.2649H327.172C326.9 65.2648 326.714 65.213 326.614 65.1094Z" fill="black"/>
    <path d="M331.412 65.2649H329.578V64.7115H331.412V64.0303H329.578V63.4768H331.412V62.7744H328.747V65.9674H331.412V65.2649Z" fill="black"/>
    <path d="M334.661 65.2094C334.661 65.2379 334.656 65.2598 334.646 65.2754C334.636 65.291 334.617 65.2988 334.588 65.2988C334.566 65.2988 334.549 65.2896 334.539 65.2711C334.529 65.2527 334.52 65.2335 334.512 65.2137L333.818 63.5192C333.721 63.2808 333.596 63.0886 333.441 62.9424C333.286 62.7962 333.073 62.7231 332.8 62.7231C332.687 62.7231 332.577 62.743 332.47 62.7827C332.364 62.8225 332.271 62.8799 332.193 62.9552C332.115 63.0304 332.052 63.1248 332.004 63.2383C331.956 63.3518 331.932 63.481 331.932 63.6257V65.9673H332.783V63.5364C332.783 63.508 332.788 63.4861 332.798 63.4704C332.808 63.4549 332.827 63.447 332.856 63.447C332.878 63.447 332.895 63.4562 332.905 63.4747C332.914 63.4931 332.924 63.5123 332.932 63.5321L333.626 65.2265C333.728 65.4735 333.855 65.6679 334.007 65.8098C334.159 65.9518 334.371 66.0227 334.644 66.0227C334.757 66.0227 334.867 66.0042 334.974 65.9673C335.08 65.9305 335.172 65.8744 335.25 65.7991C335.328 65.724 335.392 65.6295 335.44 65.516C335.488 65.4025 335.512 65.2705 335.512 65.12V62.7742H334.661V65.2094H334.661Z" fill="black"/>
    <path d="M336.87 64.5538L337.637 64.7795C337.781 64.8221 337.88 64.8611 337.932 64.8966C337.985 64.9321 338.011 64.9839 338.011 65.052C338.011 65.1088 337.99 65.1584 337.947 65.201C337.905 65.2436 337.83 65.2648 337.722 65.2648H336.087V65.9673H337.594C337.801 65.9673 337.982 65.9417 338.137 65.8906C338.292 65.8395 338.419 65.7714 338.52 65.6863C338.621 65.6012 338.696 65.5005 338.746 65.384C338.795 65.2677 338.82 65.1442 338.82 65.0136C338.82 64.761 338.737 64.5644 338.571 64.4239C338.405 64.2834 338.157 64.1649 337.828 64.0685L337.049 63.8428C336.97 63.8201 336.912 63.7924 336.877 63.7597C336.841 63.7272 336.824 63.6853 336.824 63.6342C336.824 63.5945 336.842 63.5583 336.879 63.5256C336.916 63.493 336.98 63.4766 337.07 63.4766H338.714V62.7742H337.075C336.734 62.7742 336.47 62.8523 336.283 63.0084C336.096 63.1646 336.002 63.376 336.002 63.6427C336.002 63.8556 336.073 64.0387 336.215 64.192C336.356 64.3452 336.575 64.4659 336.87 64.5538Z" fill="black"/>
    <path d="M345.227 63.1425C345.102 63.0247 344.944 62.9339 344.752 62.87C344.561 62.8062 344.339 62.7742 344.086 62.7742H341.932H341.664H339.267V65.9672H341.932V65.2647H340.097V64.7113H341.932V64.0301H340.097V63.4766H341.664H341.932H344.073C344.326 63.4766 344.495 63.5221 344.58 63.6128C344.665 63.7036 344.708 63.8612 344.708 64.0854V64.6815C344.708 64.8943 344.665 65.0449 344.578 65.1328C344.491 65.2207 344.316 65.2647 344.052 65.2647H343.26V63.9236H342.409V65.9672H344.086C344.339 65.9672 344.561 65.9352 344.752 65.8714C344.944 65.8076 345.102 65.7168 345.227 65.5989C345.352 65.4812 345.446 65.3378 345.508 65.169C345.57 65.0002 345.602 64.8121 345.602 64.6049V64.1366C345.602 63.9294 345.571 63.7413 345.508 63.5725C345.446 63.4037 345.352 63.2603 345.227 63.1425Z" fill="black"/>
    <path d="M323.439 67.0315H321.842V70.2245H322.693V69.1602H323.439C323.878 69.1602 324.203 69.0949 324.413 68.9643C324.623 68.8338 324.729 68.5954 324.729 68.2491V67.9341C324.729 67.6105 324.623 67.3792 324.413 67.2401C324.203 67.101 323.878 67.0315 323.439 67.0315ZM323.877 68.2235C323.877 68.32 323.847 68.3959 323.785 68.4512C323.724 68.5065 323.617 68.5343 323.464 68.5343H322.693V67.6573H323.464C323.617 67.6573 323.724 67.6849 323.785 67.7403C323.846 67.7956 323.877 67.8731 323.877 67.9724V68.2235Z" fill="black"/>
    <path d="M327.027 67.0315H325.154V70.2245H326.006V67.6871H327.113C327.215 67.6871 327.288 67.7099 327.332 67.7552C327.376 67.8006 327.398 67.8659 327.398 67.951V68.0915C327.398 68.171 327.375 68.237 327.33 68.2895C327.284 68.3421 327.215 68.3684 327.121 68.3684H326.7C326.555 68.3684 326.44 68.4046 326.355 68.4769C326.27 68.5492 326.227 68.6551 326.227 68.7941C326.227 68.8566 326.241 68.9268 326.27 69.0048C326.298 69.0829 326.348 69.1644 326.419 69.2496L327.211 70.2246H328.22L327.164 68.9176H327.24C327.374 68.9176 327.501 68.8984 327.621 68.8601C327.742 68.8217 327.847 68.7672 327.936 68.6962C328.026 68.6253 328.097 68.538 328.151 68.4344C328.205 68.3309 328.232 68.2124 328.232 68.079V67.8959C328.232 67.5922 328.134 67.3723 327.939 67.2361C327.743 67.0997 327.439 67.0315 327.027 67.0315Z" fill="black"/>
    <path d="M331.485 67.3785C331.357 67.2551 331.195 67.1592 330.999 67.0911C330.804 67.023 330.576 66.989 330.318 66.989H330.037C329.779 66.989 329.552 67.023 329.356 67.0911C329.16 67.1592 328.998 67.2551 328.871 67.3785C328.743 67.502 328.647 67.651 328.583 67.8255C328.52 68.0001 328.488 68.1938 328.488 68.4067V68.8494C328.488 69.0623 328.52 69.2559 328.583 69.4305C328.647 69.6051 328.743 69.7541 328.871 69.8776C328.998 70.0011 329.16 70.0968 329.356 70.1649C329.552 70.233 329.779 70.2671 330.037 70.2671H330.318C330.576 70.2671 330.804 70.233 330.999 70.1649C331.195 70.0968 331.357 70.0011 331.485 69.8776C331.612 69.7541 331.708 69.6051 331.772 69.4305C331.836 69.2559 331.868 69.0623 331.868 68.8494V68.4067C331.868 68.1938 331.836 68.0001 331.772 67.8255C331.708 67.651 331.612 67.502 331.485 67.3785ZM330.974 68.8834C330.974 69.136 330.926 69.3149 330.831 69.4199C330.736 69.5249 330.574 69.5773 330.344 69.5773H330.012C329.782 69.5773 329.619 69.5249 329.524 69.4199C329.429 69.3149 329.382 69.136 329.382 68.8834V68.364C329.382 68.1115 329.429 67.9334 329.524 67.8298C329.619 67.7262 329.782 67.6744 330.012 67.6744H330.344C330.574 67.6744 330.736 67.7262 330.831 67.8298C330.926 67.9334 330.974 68.1115 330.974 68.364V68.8834Z" fill="black"/>
    <path d="M335.112 67.3997C334.987 67.282 334.829 67.1912 334.637 67.1273C334.446 67.0635 334.224 67.0315 333.971 67.0315H332.315V70.2245H333.971C334.224 70.2245 334.446 70.1926 334.637 70.1287C334.829 70.0649 334.987 69.974 335.112 69.8562C335.237 69.7384 335.331 69.5951 335.393 69.4263C335.455 69.2574 335.487 69.0693 335.487 68.8622V68.3939C335.487 68.1867 335.455 67.9986 335.393 67.8298C335.331 67.6609 335.237 67.5176 335.112 67.3997ZM334.593 68.8536C334.593 69.109 334.547 69.2893 334.454 69.3943C334.362 69.4994 334.175 69.5517 333.894 69.5517H333.166V67.7041H333.916C334.185 67.7041 334.366 67.756 334.456 67.8595C334.547 67.9631 334.593 68.1426 334.593 68.3981V68.8536H334.593Z" fill="black"/>
    <path d="M338.169 69.1516C338.169 69.3048 338.133 69.4177 338.06 69.4901C337.988 69.5625 337.872 69.5987 337.713 69.5987H337.228C337.058 69.5987 336.938 69.5625 336.868 69.4901C336.799 69.4177 336.764 69.3049 336.764 69.1516V67.0315H335.913V69.0707C335.913 69.4511 336.015 69.7476 336.219 69.9605C336.423 70.1734 336.764 70.2798 337.241 70.2798H337.701C337.95 70.2798 338.16 70.2527 338.331 70.1989C338.501 70.1449 338.636 70.0662 338.737 69.9626C338.838 69.8591 338.91 69.732 338.954 69.5816C338.998 69.4312 339.02 69.2608 339.02 69.0707V67.0315H338.169V69.1516V69.1516Z" fill="black"/>
    <path d="M341.898 67.0315H340.983C340.73 67.0315 340.507 67.0634 340.314 67.1273C340.121 67.1912 339.961 67.282 339.833 67.3997C339.706 67.5175 339.609 67.6609 339.544 67.8298C339.478 67.9986 339.446 68.1867 339.446 68.3939V68.8622C339.446 69.0694 339.478 69.2575 339.544 69.4263C339.609 69.5951 339.706 69.7385 339.833 69.8562C339.961 69.974 340.121 70.0649 340.314 70.1287C340.507 70.1926 340.73 70.2245 340.983 70.2245H341.962V69.522H341.047C340.774 69.522 340.588 69.4702 340.489 69.3666C340.39 69.2631 340.34 69.0921 340.34 68.8536V68.3939C340.34 68.1554 340.388 67.9859 340.485 67.8852C340.581 67.7845 340.762 67.734 341.025 67.734H341.898H342.92H343.112V70.2246H343.963V67.7339H345.177V67.0315H342.92H341.898Z" fill="black"/>
    <path d="M202.089 70.0118H203.329V73.3364H204.014V70.0118H205.26V69.4195H202.089V70.0118V70.0118ZM205.704 73.3364H206.356V70.3135H206.367L207.453 73.3364H208.019L209.105 70.3135H209.115V73.3364H209.768V69.4194H208.814L207.761 72.4861H207.75L206.669 69.4194H205.704V73.3364H205.704Z" fill="black"/>
    <path d="M131.718 59.849L117.814 73.3366H100.081L122.144 51.4401C130.345 43.3228 134.3 41.9906 148.286 41.9906H203.527L191.539 53.73H149.868C139.42 53.73 137.197 54.5348 131.718 59.849ZM189.749 55.6029H150.118C139.595 55.6029 137.949 56.4081 133.175 61.1812L121.02 73.3366H137.463L141.376 69.4236C143.961 66.8392 145.115 66.593 150.326 66.593H178.758L189.749 55.6029ZM194.036 73.3366L225.466 41.9905H205.942L174.596 73.3366H194.036Z" fill="black"/>
    <path d="M228.35 73.3788V64.9789C228.35 57.8243 233.653 53.2019 241.86 53.2019H259.363V51.4226H228.35V42.0549H257.588C264.511 42.0549 269.535 46.2455 269.535 52.0171C269.535 58.2226 264.979 62.2317 257.926 62.2317H238.986V64.0089H269.113V73.3788H228.35Z" fill="black"/>
    <path d="M271.015 73.3788V64.9789C271.015 57.8243 276.318 53.2019 284.524 53.2019H302.029V51.4226H271.015V42.0549H300.253C307.177 42.0549 312.2 46.2455 312.2 52.0171C312.2 58.2226 307.644 62.2317 300.591 62.2317H281.651V64.0089H311.778V67.2733L311.666 73.3787H271.015V73.3788Z" fill="black"/>
  </svg>
</div>
<h1 class="banner-top__contents__title">Entra nella nuova era della Formula 1®</h1>
<p class="banner-top__contents__p">Mettiti al volante per una nuova stagione con auto ridisegnate che ridefiniscono ogni gara</p>
<button class="banner-top__contents__button"><a href="https://www.ea.com/it-it/games/f1/f1-22">Acquista subito</a></button>  
</div>`

function switchLayout(event) {
    const bgImage = document.querySelector(".banner-top__bg-image")
    const bannerTopChild = document.createElement("div");
    if(event.matches) {
        bgImage.innerHTML = "";
        if(bannerTop.innerHTML.indexOf("banner-top__contents") != -1) {
            return
        } else {
            bannerTopChild.classList.add("banner-top__mobile-contents")
            bannerTop.appendChild(bannerTopChild);
            bannerTopChild.innerHTML = bgImageChild;
        }
       
    } else {
        bgImage.innerHTML = bgImageChild
        // bannerTop.removeChild(bannerTopChild)
        if(document.querySelector(".banner-top__mobile-contents") != null) {
            bannerTop.removeChild(document.querySelector(".banner-top__mobile-contents"))

        }
    }
}

mediaQuery.addListener(switchLayout) 