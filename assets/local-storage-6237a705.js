(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const B of i.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&s(B)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const m=document.querySelector(".dark"),M=document.querySelector("body"),c=document.querySelector("header");m.addEventListener("click",()=>{M.classList.toggle("dark-theme"),c.classList.toggle("dark-header");const A=M.classList.contains("dark-theme")?"dark":"light";localStorage.setItem("userTheme",A)});document.addEventListener("DOMContentLoaded",u);function u(){localStorage.getItem("userTheme")==="dark"?(M.classList.add("dark-theme"),c.classList.add("dark-header")):(M.classList.remove("dark-theme"),c.classList.remove("dark-header"))}const z="data:image/png;base64,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",E="data:image/png;base64,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",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAYAAAAFdgiqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVPSURBVHgB7Zl5rF5DGMYfWxW9tfVaIrUmxBZLEwRVlCCIopZKQ4Qof9QSFGlSNyGhiIRIbYktiBDETkJEqCW11BKkSiKIaonue3v7Pnnn9J6ezsx3vntP0t7m+SVPvu87M3POnJl33nnf+QAhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQohk2g9hU2MU0wnS8aZhpH9OOpoGm1aYlpn9MM0yfmj4yfW5akbkn7eN806HI867ps+LHluFzp0yDRaZlkYcNNm2RaLPYtFVQiqWhXvW+HaV+xfqyuWmbRPnKoIFojvmmQeG5vYV94rsORvt0m5bDjWJ1pJz9usjUZdo/cQ/O06Cg/UxnmFaZ3jHdYvoxcd8JpklIj3fBXESM6sNMg4mmNyvXOk3PwVdHFQ7CnaaTTcchDV/katO80rVtTY+ZDky0uQc+cKMS5Vx5XImXojluMt1m2hm952vTw6bH0TtoVLPh7/d+uF+x0DnGD8DnpB1oaGeZtjOdgnUNlgbFd+5CeoG3pDujsZH6Q+GuNFafnbsMvgq6W4jG2lG6L79/mal/nenZTPnbpntrPLcdXZJ517r6wDSyof7Q470G39o44W8l6tEQvw3P5nY3JzNfR5XmgAbVBd8Wq3XnJu5xAyo32JCcaXoE7pZFPbgVnQ0fNxrWQZE6/8PH9oRQ91TTiaZ/I3UZcuwdvtN7ccu7Fet7qCdMT6EGvXZtDUJPQBc8Fv0PxoX3Yf3YsMof8BgmBdv/V7nGCWasG4sPaQjcut6AhyEdlfK/TVPhi/Vw00nwcCQWO9PTzAzPuwu+GwwolXObfRDuvSaiBhuDUZFz4DHHJPSdV00/Ra5zcMcn2nDgGEPMj5T9jDRFANydKL8DPdnVsUjzq+k0+PZSwLmhF3oBPZ6kDOPPw0w3l67RizHzY4z0fCiPtS1gv7l9/mCaDDeoqk1MgRtUq4WzTscJ99XUVhgLULkyBgDZzuZgjNJZeeaF8FXZKtNoxVfwGKLKaKSNitnZS6Y/I2W7Iw2z2+sz5Vz5uZS9gONFr7ekcv0LuDdK9Xto+ORcjIEnPkeYtkYevu9008umh0znwuOiqg0w22bGOjn8PiZxP7bfN3wfXxgVV+gOiQY8p3gR7lIJJ36caftEfQaI85CHL8PBvhY9Z2UcGE78SogyuayOYz3EdD88jIgd8dBhcO5mBE0L+gsee7GcxhlzKgxLrkBrhgeRtUbF1T0y0+AX9KSxh5h2Qxq68OnIw1XJ8xGuBG475UPYjWVLrgM9C483ZiXKufDo1ZciD3eDC0wLStc4Dkeazsu0+w4eNoyOlPGZDAWYKc6plA0JIsvRMMUEPgPPFFKHlbTY4agHX+T3GvXokW6HD+hV6J+n+/TaHLtW3vUT+Plbij1Mj6I9GELQmEdl+jYmKAcN7m7U26bpCWMejd5ubSJSGNUr8KN47t2t9uMczDgmtFGfk1GccYxD/4MLYdca9TrR7KLhuNHTM5BvwrMzqP+4Rr1rTJdHrtNbPl38KDq0EB7hc4tjas/0s+5fHXSf35teh2cKC9Ae3EJuhK+CKyFyMFzgwuWZEROLKWiGWUhv4WVSXpHZ67TiR2z1cKtjxsO/Q/aE/xXDrfFouKEx/XwPHuhxm/sN/hfC7Mp9ePi2F+LwpHdq5RpTc2YRHUjDbYSr/oBEOfvDPzdjZ0LMTk5PtKPr53lPLG1mNnox+paVMqv8Bn4Q2S5FZshge2b4XBTKRpgORt/gon6yZl3awLDIdWbbreJoIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEKIDc8aWdJiGU5BS6UAAAAASUVORK5CYII=",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAMAAAAyqPiYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAL9UExURQAAAABdmQBEiQBinABjnABhmQBRkkdwTABimwBdlwBinABinAA3ZgBVngBinABinABinQBinABinACAgABgmgBinABimwBgmQBgmwBinABimwBinABhnABimwBmmQBemgBimwBVVQBinABinABhmwBjmwBglABjngAAQQBinABhnABimwBglwBjmgBjmABhngBhnABinABhnABgmQBalABinABinABfqgBhnABinABinABilwBinABinAAA/wBinQBjmwBflwBhmwBfmQBemgBfmgBinABimwBinABjmQBfmgBflwBinABfpABinABinABimwBenABimwBhmwBinABhmwBhnABhmwBimwBinABjnABhmQBinABinQBdkgBhnABjnABgmgBinQBinABimwBhnABgmwBinABhnABinABinABimwBhnABgmgBinABjnABhmgBinABimwBimwBhmwBinQBhnABhmwBinABinAD//wBhnABhmwBjnABhmwBimwBinABhnABinABhnABgnwBfmQBinABggABhmwBinABhnABhnQBhmwBelABinABhnABinABhnABimgBinABhmwBjnABinABinABimwBhmwBdiwBinQBgmwBinABinQBZiwBimgBjnABgmgBimwBinQBinABhmwBimwBinQBinABimwBVlQBimwBimwBgmwBinABYiQBhnABinABhnABYlQBinQBhmwBinQBhnABinQBhnABZlgBhnABhnABhnABimwBhmwBjmwBknwBinABinABhnABhnABjnABengBimABhnABinAAzmQBinABhmgBinQBflgBhngBxjgBmqgBplgBhnQBinQBemABjngBjnABjmwBkmwBZoABinABinABfmwBhmgBhnQBmnQBinQBinABhmwBjnABhmwBinABinABjnABhnABjmwBinABglwBglgBgmwBhnABinQBinQBhnQBhnABjnABimgBimwBinABkmwBhnAAAGgBinABim/9A/jsAAAD8dFJOUwEeBP74MgcA9Szw/AUG8v2arMYCXXBeIxzDQPU4/QUk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",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAA3CAMAAAAyqPiYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMAUExURUdwTO0xFuw1He19bhUVFRwcHGFZVu9oVOu5ueSCcAoKChoaGvB7aSMjIygoKBsbGwgICDswMDExMe+AdB4eHu1fTu5DKygoKHxra0hISDY2NhYWFuwyGe5mUvNlUMW3txgYGCIiIhcXFw0NDQ0NDQoKCk5OTulMN+9KNBISEu0zGu43Hu40HO5FLjo6OjMzMxcXFyAgIAgICBISEhMTEwoKChISEk9PT+43Hu4/KO4/J+00G1ZWVuxIMe5AJ/FVQy8vL////+9WQe9SPScnJzQ0NCwsLO4+Jg8PD/OOfiIiIiMjI+5FMAcHBy4uLg8PDygoKA0NDRgYGCIiIhQUFDs7OyEhISEhIU5OTldXVzMzM0FBQWddWe07Iu5DLCQkJENDQ+dNOe9YRQsLCyAgIOxIMu09JAgICOxcSBcXF+05IOo3H+0zGgQEBO44H/JZRg4ODgsLC+5LMy8vL+08I/BtXBMTEwQEBAgICC0tLe1GLwgICPBWQCkpKQsLCxwcHCAgIJOTk9XHw2FhYRkZGTY2NiMjIzg4ODY2Njs7O0xMTCYmJiMjIy0tLQgICB0dHScnJxoaGisrKy8vLyUlJRERERYWFuFELgMDA+M5ISsrK+o5Ie5AKBAQEO0zGe5DK+c4IO02HO0vFu4zGhsbGwcHB+0xFu1JMO4+Ju9xXexAKe5ONuc0HWJiYllZWQ4ODi0tLSAgIDg4OBAQEBsbGyIiIjY2NiEhISIiIgMDAwgICBAQEO9OOPGcjuszHO5PPOs7I+ozGt02IO5HMKZrZeg+Ju9JMvBLNO87JNM+Le9LNPBKNO9IMe5NNvNWQx4eHkhISC8vL3t7ey4uLk1NTURERDU1NTU1NT4+PjY2NlJSUkJCQhsbG0dHRzExMTo6OspKQO05H91KMeM3H/mOfu5CKu5CKu06IuVCLN9AMPFkUXp6eklJSSwsLOhpVrVdTUVFRYKCgkFBQXV1dVZWVhYWFuwtE+0vFQAAAAQEBO0xGCYmJgoKCj09Pe03H0hISGYQIjAAAAD2dFJOUwD76AxgvxBABAjmXxBgZ4DACDAVUSqPRAcWgLn3GDYIozuLtuzxIkRmgPTh729RN8LA4Kmv2cqv1r/T9zFVrx8nAWB4d2CU3/Akhm9491vgbP7Qo56wqHcoPxhJDOd/wK48G/jPSrXzWO/x0O/v+CTOr16IkyHF+9FUh8lrnWyQnBsOoeHa4BCQXTh+18a6Z2/ZvU4f1FeJ55utv+OU57u2xvjdr6DvUMgvpHJwH0p4gJRz5G6vablK9/vXsxKlNZ3blJoVaqGQrGRtqpd+cXzSdWWppVrmrz7zx3X9YqScGIs0yyeX66t0EJeKv9NEYG8769ev/ppULe4AAAZGSURBVBgZ7cFlWFSJHgfgH0x4ZgaGmWHIoXvpFhCQBuluBQUDFUERCUXQa3evhbWL3Yq55XZ39713b3f9mQHde885Owg+D5+8z87wgffFhAkTxrnVzhh3BNmL/JwwzjDPENEhBuNL3CARnZiF8eUAsQZnYVyxXUAsUyUemgbjsz1GrFfAY6yWxM+nN2B0iXEmRHMEABKdZsScINYhBsb3ynMvCGDpbf1b0ltohvGAseo8TMNMjpy1hfFJko+bkN6Uoz5WAjBWPhIYE+P0kgn9ZErMa04M4Dj7VX+iFTAeJu51E+L5xgecAWCZtNSPOPNfhpFI3l1gQhyH3y1pSgQEPvGmNOwNGMUfAkyJcyLmTUsAklNnp9Aob8MIJAF+xPFf6sQAsLI2HaBRTp8SwOAEcenE8o1eIgFv5lM0wj9+EniWljAg79PE8l/qBEByBpxZx0nP1LoJrGlxnXOmH66GwbzrQESLslsBSJL9fg9e0wLinMyeCljOeyvKd4BY3jCYVn+/5HckAFqzT9LCM/iJWQyRaTJj6d3pRw/NgOEkCcBytF5ERMcwbPXRFT/4zPGl0WbAsBytHYgzDyPeGqRHDKR7w5BarR2I55eIEVb36KEB07NJjjAkx7cXkt6T4PxgBl4y6aVnOwlgUI4zfqRhDmJwnkufCt4fO8+fDzi3YhoMTBIwnUa8CE7TQop2BidW5irOVatkMnMvmUxtGyST7YMqRe5l7iVTwdzuYkoQgM9TbFApU6HKnFHtXi2XrwdchUIbG6FMBa+s7XuczW2gVgmFQhthgloodFULzWMThEKhc+6OcoxpXvoAjTITnCeJ6Bw4Ltqi7dqn+z0Lb1pk3NXJI6WFRZme9TXd0h3avqAc8zuaFsBm7rKPmKd1xWjXBoWHBV+LLAejkBamhe7M2JYq3ZITvFurqMyxv6Yt/Lat4/bOwhueaxrr++cW1vQ0uqsxFmt6RBQD1veLiOieGKx2z4NbCvI9gu3Fy3rxnx7dTftNd7KAZhdNQZ5be9Z9LwDy20FI3b+r78L9gksRuQ0uAPbM3XXVVRe4LSTjCWQW9Bbsv+oJiwymLFSu3bA7sK1q75W8Qnu7sAglxnSAOCaHfyTeeXA6iTUwG4C4oDmi8HagLmKx3Z19XrpvtcvDy6R2WK+TS0t1eb227e4MoAxeVi2t8xTJpZr6+3vUbTaAWru8tyyjTmSuS0DpzuZi3U4NFodBs7i0UbHdzcMzfFPbco1Y1fgexpREZHL81WcciOdrBdZUB+K8CCA1dFlOT2i+bqUwV9e9N9LtvnDfSl1Lvlq7MSc2Q3s5yz1UCdX1MI++vanBEWGaLG1oyo79K4FuqRLuxRFhHdrurgx5XdBd7XU76Upx46X25UJXxZVrvfnalbLU7XkuGJPZoaXzfulLesfAOUC8aAb4oCwtM9/CXiQq/UqkcbP7TiTqquxRFG/sDyxFZkiHwv0W4KpwbxF9jh0uBzsSRGVFimI7IG0zqotutXTZdSvCOir6lSkhe1QhCbGiizUiUW6/TVpmikhUtFkRHouxPfvaEdIbOPo8WDN9iWXykhWMRbBiPukd+c20ppcBMK8Tkb/1s2CZTfrbXyf9nFoxlmjSizpnZvbOyTm/kmC2CU0PsASPkTdssGdVg+NVMplVW/sJeBtrJ5dMnvzZKvDSNtT++8Z3B3dXgxeY6xquxGN6ingxSYDZAmKZRt+LetMZeh8PZeb1unkE2YIjE3V1hTxYE3kLPHdRT+PB0lDwxF/8d+hfDS1f/x28WOk2hbSv7zoeywvEOu0NluN84vgtkWDY+s/qPo1o2OLxkRic8M01IVtKPl5TCVaieN3WrRkhW3eBk1j14It/frl266efgLPpbpW4uUy8fjUeyyzfwfiZDDi2vyai6ackGFEZVreu2SMywxwcZegNTWF48OVtiWApP6hpSP1HzroNq8Cpqv/L10Pr6osSwPumpKRtV8llPKbnJ2GYz2CUjwSjJJa//6f3P/zyw7WrwHGVul1Z6xKxxg0c5it5s5dasyoVvMChB39e+2AoC7xNFRXfeFysqLDF/42ZbYZHbdxX7la+2dnCDpzAYgvOTRtwnNPeu4CrudDLr/0FS3QBnMRLT/AslDCYREyYMGHChHHnfy8sKY3051tsAAAAAElFTkSuQmCC",p="data:image/png;base64,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",L="data:image/png;base64,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",f="data:image/png;base64,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",K="data:image/png;base64,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",l=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:z},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:E},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:H},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:p},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:L},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:K},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:f},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:U},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:S}],g=document.getElementById("support-list"),O=document.getElementById("scroll-btn"),d=document.querySelector(".support-btn-icon");let F=1,o=0,h=0;const C=l.length,P=()=>{l.forEach(A=>{const e=`
      <li class="support-list-item">
      <span class="support-number">0${F++}</span>
        <a class="support-list-link" href="${A.url}" target="_blank" alt="${A.title}">
    
          <img class="support-img" srcset="${A.img} 1x, ${A.img} 2x"src="${A.img}" alt="${A.title}" />

        </a>
      </li>
    `;g.insertAdjacentHTML("beforeend",e)}),h=g.firstElementChild.clientHeight},x=()=>{let A=5;o=o+A,o>=C?(o=0,g.scrollTo({top:o*h,behavior:"smooth"})):g.scrollTo({top:o*h,behavior:"smooth"}),o+A>=C?d.classList.add("rotate"):d.classList.remove("rotate")};O.addEventListener("click",x);P();const k="data:image/png;base64,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",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOOSURBVHgB7VdLaBRBEH3Vsx/FqFH8hBjBD0TjwQ8oKvhB4kUFRRFvHhU8iuIHD55E/CJe/KF3vQmCoBgRFFGDGC96kKigrmJETSAmu5kua2dms90zszMbSG4paGar+nXX66rqzwLj4gsldfL1fKurhtY5GZ6hWeXByfjoBLooQ7452n1F+/AOIyHBN7GIkb0tP5eJBozQdzwhdFOp1E4H8CmVBF/DYjjZ5+K6EaMtjBKBVtK+4lvTnIngKHcfegwI+JJlxh1pbUReiD1RJmLoam6XsJgHLQGqNA5ajM7a6ONQ0zH2sg5a5F5ztph+LRLEzibWgudyI/+rg8aI6PB0E0e18QYOnNtm+rXSQZoX2Bsg+O1MARbKuEyDTOACvR+BLx3STQZO2pwNwOQFgs8B/QXgR6d8v0XmU6Sba5LQTHli2LLqKGj5QVB+imXm753gB3uF0GegoQW0+QaoZaM9dvAP9MszQNdlP2wVP1ANJsxKB1zRzRzO2wG1+mSEgLemppXi+FZ5RtD2u1ECZck3Qq0/DVq4O1QzrGpGwiPL1XTQpBYkCTWvBU9tA01vS8RhwuygKCt+7JPBJuEqI89RcKxMW5qOKS9O157LIsEu2QkSEqk0VDYN4e80jfpI+HvZ1JEuug5MOBKUSAJ2CuogwfUQDZNQSTWhlc2y3lWmYshenIskEmSTqNdBmmiEdgfSSVQwVK+DNAnSUX0UcG0S3hliJnnUCjO47CpTUuI5YQLYDvXAX3BPt7cUmrPCclAdXwL/Esy/v6BZrcDExuGp/HQEsUjaHRJ+rkbCLyb+2gV97zi48FomGvJ75DimNfuh2o8MR0t3XAS/uALu/x3cZ3LGNK+A2nnZ2PrmhWf4NZXSiRkP5bN5uLNhpkz6RyYoIU5U+zHwjw+gaXOhn16K369iowlTwYO9prUje6qnPTYSwrjPUvt64rgOi350HjR/HfSbO3J9OzVwEs2BPqtPgjJoIuzC1FSotR/Cz11f1+APT+RHJrZAuSYtfDR160pVrO5x8GyrNv9VhJC9qitEx1DsmOrrix+HSFnMqXi46T0Rt2KMRCrkU/7c9/mmzd4dgilqZw/I7UTMS3wUGPQiQ1vDZhU25C5+7XLLkWDqtl7d4cYJr3EdsnkNb5lodf5sIfJPLPFcHjzUtIS0s4pZHqZM2QhjrxqV8a3avDplLhLRT87ws/yFwnuMS4r8B1Xvwi1OZ3iDAAAAAElFTkSuQmCC",a=JSON.parse(localStorage.getItem("books"))||[],D=document.querySelector(".shopping-list");async function N(A){const e=A.target.closest(".book-modal-item");if(!e)return;const n=e.id,s=e.querySelector("h3").textContent,t=e.querySelector(".book-modal-descr").textContent,i=e.querySelector(".book-modal-author").textContent,B=e.querySelector(".book-modal-card-img").src,b=e.querySelector(".book-modal-link-amazon").href,Q=e.querySelector(".book-modal-link-apple").href,y=e.querySelector(".book-modal-thumb").dataset.id,I=e.querySelector(".modal-text"),w={_id:n,title:s,description:t,author:i,book_image:B,category:y,amazon_product_url:b,apple_product_url:Q};if(A.target.textContent==="Add to shopping list"){if(I.style.display="block",a.find(r=>r._id===n))return;A.target.textContent="Remove from shopping list",a.push(w),localStorage.setItem("books",JSON.stringify(a))}else if(A.target.textContent==="Remove from shopping list"){I.style.display="none";const r=a.findIndex(Y=>Y._id===n);r!==-1&&(a.splice(r,1),localStorage.setItem("books",JSON.stringify(a)),A.target.textContent="Add to shopping list")}}function G(){try{if(!a)return;a.forEach(A=>V(A))}catch(A){console.log(A),iziToast.error({title:"Error",message:`Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${A.message}`,position:"topRight"})}}function V(A){const e=`<li class="shopping-list-item" data-id="${A._id}">
        <button type="button" class="delete-btn" title="Delete">
        <div class="delete-btn-icon"> </div> </button>
        <div class="shopping-list-div-image"> <img class="shopping-list-image" src="${A.book_image}" alt="${A.title}"> </div>
        <div class="shopping-list-text"> <h2 class="shopping-list-item-header">${A.title}</h2>
        <p class="shopping-list-item-category">${A.category}</p>
        <div class="description-wrapper"><p class="shopping-list-item-description">${A.description}</p></div>
        <div class="link-container">
        <p class="shopping-list-item-author">${A.author}</p>
        <div class=""link-wrapper>
            <a class="amazon-icon" href="${A.amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="amazon-logo hover-items-amaz-books"> <img src="${k}" alt="Amazon" />
            </div> </a>
            <a class="apple-icon" href="${A.apple_product_url}" target="_blank" rel="noopener noreferrer nofollow"> <div class="apple-books-logo hover-items-amaz-books">
            <img src="${Z}" alt="Apple book"/>
            </div> </a>
        </div>
        </div>
        </div>
        </li>`;D.insertAdjacentHTML("beforeend",e)}export{k as a,Z as b,V as c,a as l,N as o,G as r,D as s};
//# sourceMappingURL=local-storage-6237a705.js.map