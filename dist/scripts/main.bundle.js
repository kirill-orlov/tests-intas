!function(){"use strict";var t,o=document.querySelector(".app"),l=o.querySelector(".app__inner"),d=o.querySelector(".sidebar"),e=d.querySelector(".sidebar__links"),u=[{id:0,name:"Путешествия",time:3600,descr:"Добро пожаловать в квиз о путешествиях! \n\t\tЭтот захватывающий квиз предлагает вам увлекательное путешествие по различным странам и культурам. \n\t\tВам предстоит ответить на пять интересных вопросов, касающихся столиц, знаменитых памятников, \n\t\tкультурных особенностей и многого другого. \n\t\tПроверьте свои знания и обогатите свой опыт в путешествиях, \n\t\tв то время как наслаждаетесь этим захватывающим квизом о мире!",questions:[{question:"Какой город является столицей Франции?",type:"options",answers:[{id:0,value:"Лондон",correct:!1},{id:1,value:"Париж",correct:!0},{id:2,value:"Берлин",correct:!1},{id:3,value:"Мадрид",correct:!1},{id:4,value:"Рим",correct:!1},{id:5,value:"Амстердам",correct:!1}]},{question:"Какой памятник считается символом США и находится в Нью-Йорке?",type:"options",answers:[{id:0,value:"Статуя Единства",correct:!1},{id:1,value:"Тадж-Махал",correct:!1},{id:2,value:"Статуя Свободы",correct:!0},{id:3,value:"Биг Бен",correct:!1},{id:4,value:"Эйфелева башня",correct:!1},{id:5,value:"Мост Золотые ворота",correct:!1}]},{question:"Какая страна известна своими пирамидами и сфинксом?",type:"options",answers:[{id:0,value:"Греция",correct:!1},{id:1,value:"Египет",correct:!0},{id:2,value:"Италия",correct:!1},{id:3,value:"Турция",correct:!1},{id:4,value:"Япония",correct:!1},{id:5,value:"Индия",correct:!1}]},{question:"Какой канал является одним из наиболее известных инженерных \n\t\t\t\tчудес мира и соединяет Атлантический и Тихий океаны?",type:"options",answers:[{id:0,value:"Канал Манчеты",correct:!1},{id:1,value:"Канал Панама",correct:!0},{id:2,value:"Канал Суэц",correct:!1},{id:3,value:"Канал Север-Юг",correct:!1},{id:4,value:"Канал Манчестер",correct:!1},{id:5,value:"Канал Норфолк",correct:!1}]},{question:'Какой из следующих городов считается "Венецией Севера" благодаря своим каналам и мостам, \n\t\t\t\tрасположенным над Штокгольмским архипелагом?',type:"text",answers:[{id:0,value:"Амстердам — культурная столица Нидерландов, известная своими уникальными \n\t\t\t\t\t\tканалами и великолепной архитектурой.",correct:!1},{id:1,value:"Венеция — итальянский город, лежащий на 118 островах, известный своими каналами, \n\t\t\t\t\t\tгондолами и величественной базиликой Святого Марка.",correct:!1},{id:2,value:"Стокгольм — столица Швеции, возвышающаяся над Балтийским морем, которая славится своими красивыми \n\t\t\t\t\t\tфьордами, историческими замками и многочисленными музеями.",correct:!0}]}]},{id:1,name:"Программирование",time:2e3,descr:"Добро пожаловать в квиз о программировании! \n\t\tВ этом увлекательном квизе вы сможете проверить свои знания в области программирования. \n\t\tВам предстоит ответить на три интересных вопроса, которые затронут различные аспекты программирования, \n\t\tвключая языки программирования, алгоритмы и логику программирования. \n\t\tПодтяните свои знания, проверьте себя и наслаждайтесь этим захватывающим квизом о мире программирования!",questions:[{question:'Что такое "замыкание" (closure) в JavaScript?',type:"text",answers:[{id:0,value:"Это процесс, при котором JavaScript автоматически преобразует \n\t\t\t\t\t\tтипы данных для удобства программиста.",correct:!1},{id:1,value:'Это способ объявления переменных без использования ключевого слова "var".',correct:!1},{id:2,value:"Это функция, которая не имеет доступа к внешним переменным своего контекста.",correct:!1},{id:3,value:"Это функция, которая имеет доступ к переменным из своего лексического окружения, \n\t\t\t\t\t\tдаже после завершения выполнения.",correct:!0}]},{question:"Какой из приведенных ниже паттернов JavaScript используется для обработки асинхронных операций?",type:"options",answers:[{id:0,value:"Singleton",correct:!1},{id:1,value:"Observer",correct:!1},{id:2,value:"Factory",correct:!1},{id:3,value:"Promise",correct:!0}]},{question:"Что такое RESTful API?",type:"text",answers:[{id:0,value:"Это способ организации данных в реляционных базах данных.",correct:!1},{id:1,value:"Это стандартный способ оформления HTML-кода на веб-страницах.",correct:!1},{id:2,value:"Это архитектурный стиль, который определяет правила для создания веб-сервисов.",correct:!0},{id:3,value:"Это язык программирования для создания интерактивных элементов на веб-страницах.",correct:!1}]},{question:"Что такое принцип SOLID в объектно-ориентированном программировании?",type:"text",answers:[{id:0,value:"Это набор базовых правил для написания стилей CSS.",correct:!1},{id:1,value:" Это принцип проектирования баз данных для обеспечения их эффективности и целостности.",correct:!1},{id:2,value:"Это набор принципов, которые помогают написать чистый и поддерживаемый код.",correct:!0},{id:3,value:"Это способ объединения нескольких файлов JavaScript в один для уменьшения загрузки страницы.",correct:!1}]}]},{id:2,name:"Экономика",time:600,descr:"Добро пожаловать в квиз по экономике! \n\t\tВ этом увлекательном квизе вы сможете проверить свои знания в области экономики. \n\t\tВам предстоит ответить на три интересных вопроса, которые охватывают различные аспекты экономической теории, \n\t\tмировую финансовую систему и ключевые экономические показатели. \n\t\tПроверьте свои знания, расширьте свои познания в экономике и наслаждайтесь этим захватывающим квизом!",questions:[{question:"Что такое инфляция?",type:"text",answers:[{id:0,value:"Это процесс уменьшения общего уровня цен на товары и услуги в экономике.",correct:!1},{id:1,value:"Это увеличение производственной мощности предприятий и уровня технологий.",correct:!1},{id:2,value:"Это снижение уровня безработицы в стране.",correct:!1},{id:3,value:"Это увеличение общего уровня цен на товары и услуги в экономике со временем.",correct:!0}]},{question:"Что такое диверсификация?",type:"options",answers:[{id:0,value:"Увеличение налогов",correct:!1},{id:1,value:"Расширение производства",correct:!1},{id:2,value:"Разнообразие инвестиций",correct:!0}]},{question:"Что такое спрос и предложение на рынке?",type:"text",answers:[{id:0,value:"Спрос - это количество товаров и услуг, которые производители готовы предоставить, \n\t\t\t\t\t\tа предложение - это количество товаров и услуг, которое потребители хотят приобрести.",correct:!1},{id:1,value:"Спрос - это количество товаров и услуг, которое потребители хотят приобрести, а предложение \n\t\t\t\t\t\t- это количество товаров и услуг, которые производители готовы предоставить.",correct:!0},{id:2,value:"Спрос - это количество товаров и услуг, которое производители хотят продать, а предложение - \n\t\t\t\t\t\tэто количество товаров и услуг, которые потребители готовы купить.",correct:!1},{id:3,value:"Спрос - это количество товаров и услуг, которое производители готовы произвести, а предложение - \n\t\t\t\t\t\tэто количество товаров и услуг, которые потребители хотят приобрести.",correct:!1}]},{question:"Что такое инвестиции в экономике?",type:"text",answers:[{id:0,value:"Это расходы государства на социальные программы и образование.",correct:!1},{id:1,value:"Это деньги, вложенные в различные финансовые инструменты для получения прибыли.",correct:!1},{id:2,value:"Это денежные средства, которые люди хранят в банках.",correct:!1},{id:3,value:"Это капитал, вложенный в предприятия, оборудование \n\t\t\t\t\t\tи другие активы с целью увеличения производства и прибыли.",correct:!0}]}]},{id:3,name:"Менеджмент",time:7200,descr:"Добро пожаловать в квиз по менеджменту! \n\t\tВ этом увлекательном квизе вы сможете проверить свои знания в области менеджмента и лидерства. \n\t\tВам предстоит ответить на три интересных вопроса, которые касаются различных аспектов управления бизнесом, \n\t\tэффективного лидерства, коммуникации и мотивации сотрудников. \n\t\tПроверьте свои знания в области менеджмента, расширьте свои навыки управления и\n\t\tнаслаждайтесь этим захватывающим квизом!",questions:[{question:"Что такое SWOT-анализ?",type:"text",answers:[{id:0,value:"Инструмент управления проектами",correct:!1},{id:1,value:"Метод повышения мотивации сотрудников",correct:!1},{id:2,value:"Методика принятия оперативных решений",correct:!1},{id:3,value:"Инструмент стратегического анализа",correct:!0}]},{question:'Что означает термин "делегирование"?',type:"text",answers:[{id:0,value:"Отказ от ответственности",correct:!1},{id:1,value:"Подмена исполнителей",correct:!1},{id:2,value:"Передача полномочий и ответственности сотрудникам",correct:!0},{id:3,value:"Зависимость от внешних ресурсов",correct:!1},{id:4,value:"Перенос сроков выполнения задачи",correct:!0}]},{question:'Что представляет собой "тимбилдинг"?',type:"options",answers:[{id:0,value:"Доверие и сотрудничество",correct:!1},{id:1,value:"Повышение зарплаты",correct:!1},{id:2,value:"Конфликтное разрешение",correct:!1},{id:3,value:"Мероприятия для команды",correct:!0}]},{question:'Что означает термин "эмповермент" (empowerment) в управлении командой?',type:"text",answers:[{id:0,value:"Методика развития конфликтного поведения",correct:!1},{id:1,value:"Передача полномочий и ответственности сотрудникам для принятия решений",correct:!0},{id:2,value:"Метод управления конкурентоспособностью команды",correct:!1},{id:3,value:"Применение инновационных стратегий для повышения производительности",correct:!1}]}]}],v={};function p(){l.innerHTML='\n\t<div class="test-start">\n\t\t<span>Выберите тест из списка</span>\n\t</div>'}function _(t,c){var e=Object.keys(c),i=(l.innerHTML='\n\t  <div class="top-panel">\n\t  <div class="top-panel__inner">\n\t  <div class="top-panel__left">\n\t\t  <a class="top-panel__exit js-modal-open" data-modal="modal-exit">Выход</a>\n\t  </div>\n\t  <div class="top-panel__center">\n\t\t  <span class="top-panel__test-name">'.concat(t.name,'</span>\n\t  </div>\n  \t\t</div>\n\t  </div>\n\t  <div class="test-mobile-content">\n\t  <div class="test-mobile-content__mobile-info">\n\t\t  <h2>').concat(t.name,'</h2>\n\t\t  <a class="js-modal-open" data-modal="modal-exit">Выход</a>\n\t  </div>\n  \t  </div>\n\t  <div class="test-results">\n\t\t<div class="test-results__info">\n\t\t  <h2>Тест завершён</h2>\n\t\t  <p>Вы ответили на <span class="test-results__answered">').concat(e.length,'</span> из\n\t\t\t<span class="test-results__total">').concat(t.questions.length,'</span> вопросов.</p>\n\t\t</div>\n\t\t<div class="test-results__list">\n\t\t  <p class="test-results__heading">Ваши ответы</p>\n\t\t</div>\n\t  </div>\n\t  <div class="bottom-panel">\n\t\t<a class="btn-primary btn-primary-outline btn-restart" href="#">Пройти еще раз</a>\n\t  </div>'),o.querySelector(".test-results__list"));t.questions.forEach(function(t,e){var n="",s=(t.answers.forEach(function(t){!0===t.correct&&(n=t.value)}),c[e]),a="";a=void 0!==s&&(s=t.answers[s])?s.value:"Не ответили",i.insertAdjacentHTML("beforeend",'\n\t\t<div class="test-results__item">\n\t\t  <p class="test-results__question">\n\t\t\t<span class="test-results__question-number">'.concat(e+1,'.</span>\n\t\t\t<span class="test-results__question-text">').concat(t.question,'</span>\n\t\t  </p>\n\t\t  <p class="test-results__correct-answer">Правильный ответ:\n\t\t\t<span class="test-results__correct-answer-text">').concat(n,'</span>\n\t\t  </p>\n\t\t  <p class="test-results__your-answer">Вы ответили:\n\t\t\t<span class="test-results__your-answer-text">').concat(a,"</span>\n\t\t  </p>\n\t\t</div>\n\t\t"))})}function m(t,e){o.querySelector(".top-panel__progress span").textContent="".concat(t,"/").concat(e.questions.length)}function b(){d.classList.remove("sidebar--active")}function q(){d.classList.add("sidebar--active")}function y(){var t=o.querySelector(".sidebar__link--active");return u[t.dataset.test]}p();try{u.forEach(function(t){e.insertAdjacentHTML("beforeend",'\n\t\t\t\t<li class="sidebar__link" data-test="'.concat(t.id,'"><span></span><a href="#">').concat(t.name,"</a></li>"))})}catch(t){console.error("Ошибка при редеринге списка тестов: ",t)}768<window.innerWidth&&(t=localStorage.getItem("sidebarState"),(JSON.parse(t).isOpen?q:b)()),o.addEventListener("change",function(t){t.target.classList.contains("question__answer-input")&&(v[t.target.name]=t.target.value,m(Object.keys(v).length,y()))}),document.addEventListener("click",function(t){var e,s,a,c,i,n,r=t.target;r.classList.contains("hamburger")&&(d.classList.contains("sidebar--active")?(b(),localStorage.setItem("sidebarState",JSON.stringify({isOpen:!1}))):(q(),localStorage.setItem("sidebarState",JSON.stringify({isOpen:!0})))),r.classList.contains("sidebar__link")&&window.innerWidth<769&&b(),r.classList.contains("sidebar__link")&&((e=o.querySelector(".sidebar__link--active"))&&e.classList.remove("sidebar__link--active"),r.classList.add("sidebar__link--active"),e=u[r.dataset.test],l.innerHTML='\n\t<div class="top-panel">\n\t\t<div class="top-panel__inner">\n\t\t<div class="top-panel__left">\n\t\t\t<span class="top-panel__descr">Описание</span>\n\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="test-mobile-content">\n\t\t<div class="test-mobile-content__mobile-info">\n\t\t<h2>'.concat((e=e).name,'</h2>\n\t\t</div>\n\t</div>\n\t<div class="test-descr">\n\t\t<p>').concat(e.descr,'</p>\n\t\t<div class="test-descr-buttons">\n\t\t<a class="btn-primary btn-start" data-test="').concat(e.id,'" href="#">Начать</a>\n\t\t<a class="btn-secondary btn-cancel" href="#">Отмена</a>\n\t\t</div>\n\t</div>')),r.classList.contains("btn-cancel")&&(t.preventDefault(),o.querySelector(".sidebar__link--active").classList.remove("sidebar__link--active"),p()),(r.classList.contains("btn-start")||r.classList.contains("btn-restart"))&&(t.preventDefault(),v={},e=y(),n=e,l.innerHTML='\n\t\t<div class="top-panel">\n\t\t\t<div class="top-panel__inner">\n\t\t\t\t<div class="top-panel__left">\n\t\t\t\t\t<a class="top-panel__exit js-modal-open" data-modal="modal-exit">Выход</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="top-panel__center">\n\t\t\t\t\t<span class="top-panel__test-name">'.concat(n.name,'</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="top-panel__right">\n\t\t\t\t\t<div class="top-panel__reset">\n\t\t\t\t\t\t<span class="top-panel__reset-btn">Сбросить все ответы</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="top-panel__mobile-column">\n\t\t\t\t\t\t<div class="top-panel__progress">\n\t\t\t\t\t\t\t<span>0/5</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="top-panel__timer">\n\t\t\t\t\t\t\t<span>00:00:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="test-mobile-content">\n\t\t\t<div class="test-mobile-content__mobile-info">\n\t\t\t\t<h2>').concat(n.name,'</h2>\n\t\t\t\t<a class="js-modal-open" data-modal="modal-exit">Выход</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="test">\n\t\t\t\n\t\t</div>\n\t\t<div class="bottom-panel">\n\t\t\t<a class="btn-primary btn-primary-outline btn-get-results" href="#">Завершить</a>\n\t\t</div>'),n=e,o.querySelector(".test").innerHTML=n.questions.map(function(t,e){var n=t.answers.map(function(t){return'\n\t\t\t  <label class="question__answer">\n\t\t\t\t<input class="question__answer-input" type="radio" name="'.concat(e,'" value="').concat(t.id,'">\n\t\t\t\t<span class="radio-custom"></span>\n\t\t\t\t').concat(t.value,"\n\t\t\t  </label>\n\t\t\t")}).join("");return'\n\t\t  <div class="question question--'.concat(t.type,'">\n\t\t\t<div class="question__content">\n\t\t\t  <span class="question__number">').concat(e+1,'. </span>\n\t\t\t  <span class="question__text">').concat(t.question,'</span>\n\t\t\t</div>\n\t\t\t<div class="question__answers">\n\t\t\t  <form class="question__answers-list">').concat(n,"</form>\n\t\t\t</div>\n\t\t  </div>\n\t\t")}).join(""),n=document.querySelector(".top-panel__timer"),e=e.time,s=n,a=e,c=y(),i=setInterval(function(){var t=Math.floor(a/3600),e=Math.floor(a%3600/60),n=a%60;s.textContent="".concat(t<10?"0":"").concat(t,":").concat(e<10?"0":"").concat(e,":").concat(n<10?"0":"").concat(n),--a<0&&(clearInterval(i),_(c,v))},1e3)),r.classList.contains("top-panel__reset-btn")&&(n=y(),o.querySelectorAll(".question__answer-input").forEach(function(t){t.checked=!1}),v={},m(0,n)),r.classList.contains("btn-get-results")&&(t.preventDefault(),_(y(),v)),r.classList.contains("js-modal-open")&&(t=r.dataset.modal,document.getElementById(t).classList.add("modal--active")),(r.classList.contains("js-modal-close")||r.classList.contains("modal--active"))&&document.querySelector(".modal--active").classList.remove("modal--active")})}();