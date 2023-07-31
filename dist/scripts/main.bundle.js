(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var DOMHelper = /*#__PURE__*/_createClass(function DOMHelper() {
    _classCallCheck(this, DOMHelper);
    this.appElement = document.querySelector('.app');
    this.appInnerElement = this.appElement.querySelector('.app__inner');
    this.sidebarElement = this.appElement.querySelector('.sidebar');
    this.sidebarLinksElement = this.sidebarElement.querySelector('.sidebar__links');
  });
  var domInstance = new DOMHelper();

  var DATA_TESTS = [{
    id: 0,
    name: 'Путешествия',
    time: 10,
    descr: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u0432\u0438\u0437 \u043E \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445! \n\t\t\u042D\u0442\u043E\u0442 \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043A\u0432\u0438\u0437 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u043C \u0443\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u043F\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u0441\u0442\u0440\u0430\u043D\u0430\u043C \u0438 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0430\u043C. \n\t\t\u0412\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u043F\u044F\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u043A\u0430\u0441\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0441\u0442\u043E\u043B\u0438\u0446, \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u0442\u044B\u0445 \u043F\u0430\u043C\u044F\u0442\u043D\u0438\u043A\u043E\u0432, \n\t\t\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0445 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0435\u0439 \u0438 \u043C\u043D\u043E\u0433\u043E\u0433\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E. \n\t\t\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0438 \u043E\u0431\u043E\u0433\u0430\u0442\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u043F\u044B\u0442 \u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445, \n\t\t\u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0435\u0442\u0435\u0441\u044C \u044D\u0442\u0438\u043C \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C \u043A\u0432\u0438\u0437\u043E\u043C \u043E \u043C\u0438\u0440\u0435!",
    questions: [{
      question: "\u041A\u0430\u043A\u043E\u0439 \u0433\u043E\u0440\u043E\u0434 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u043E\u043B\u0438\u0446\u0435\u0439 \u0424\u0440\u0430\u043D\u0446\u0438\u0438?",
      type: "options",
      answers: [{
        id: 0,
        value: "\u041B\u043E\u043D\u0434\u043E\u043D",
        correct: false
      }, {
        id: 1,
        value: "\u041F\u0430\u0440\u0438\u0436",
        correct: true
      }, {
        id: 2,
        value: "\u0411\u0435\u0440\u043B\u0438\u043D",
        correct: false
      }, {
        id: 3,
        value: "\u041C\u0430\u0434\u0440\u0438\u0434",
        correct: false
      }, {
        id: 4,
        value: "\u0420\u0438\u043C",
        correct: false
      }, {
        id: 5,
        value: "\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C",
        correct: false
      }]
    }, {
      question: "\u041A\u0430\u043A\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u043D\u0438\u043A \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u043C \u0421\u0428\u0410 \u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u041D\u044C\u044E-\u0419\u043E\u0440\u043A\u0435?",
      type: "options",
      answers: [{
        id: 0,
        value: "\u0421\u0442\u0430\u0442\u0443\u044F \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0430",
        correct: false
      }, {
        id: 1,
        value: "\u0422\u0430\u0434\u0436-\u041C\u0430\u0445\u0430\u043B",
        correct: false
      }, {
        id: 2,
        value: "\u0421\u0442\u0430\u0442\u0443\u044F \u0421\u0432\u043E\u0431\u043E\u0434\u044B",
        correct: true
      }, {
        id: 3,
        value: "\u0411\u0438\u0433 \u0411\u0435\u043D",
        correct: false
      }, {
        id: 4,
        value: "\u042D\u0439\u0444\u0435\u043B\u0435\u0432\u0430 \u0431\u0430\u0448\u043D\u044F",
        correct: false
      }, {
        id: 5,
        value: "\u041C\u043E\u0441\u0442 \u0417\u043E\u043B\u043E\u0442\u044B\u0435 \u0432\u043E\u0440\u043E\u0442\u0430",
        correct: false
      }]
    }, {
      question: "\u041A\u0430\u043A\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430 \u0441\u0432\u043E\u0438\u043C\u0438 \u043F\u0438\u0440\u0430\u043C\u0438\u0434\u0430\u043C\u0438 \u0438 \u0441\u0444\u0438\u043D\u043A\u0441\u043E\u043C?",
      type: "options",
      answers: [{
        id: 0,
        value: "\u0413\u0440\u0435\u0446\u0438\u044F",
        correct: false
      }, {
        id: 1,
        value: "\u0415\u0433\u0438\u043F\u0435\u0442",
        correct: true
      }, {
        id: 2,
        value: "\u0418\u0442\u0430\u043B\u0438\u044F",
        correct: false
      }, {
        id: 3,
        value: "\u0422\u0443\u0440\u0446\u0438\u044F",
        correct: false
      }, {
        id: 4,
        value: "\u042F\u043F\u043E\u043D\u0438\u044F",
        correct: false
      }, {
        id: 5,
        value: "\u0418\u043D\u0434\u0438\u044F",
        correct: false
      }]
    }, {
      question: "\u041A\u0430\u043A\u043E\u0439 \u043A\u0430\u043D\u0430\u043B \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0438\u043C \u0438\u0437 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0445 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0445 \n\t\t\t\t\u0447\u0443\u0434\u0435\u0441 \u043C\u0438\u0440\u0430 \u0438 \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u0410\u0442\u043B\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438 \u0422\u0438\u0445\u0438\u0439 \u043E\u043A\u0435\u0430\u043D\u044B?",
      type: "options",
      answers: [{
        id: 0,
        value: "\u041A\u0430\u043D\u0430\u043B \u041C\u0430\u043D\u0447\u0435\u0442\u044B",
        correct: false
      }, {
        id: 1,
        value: "\u041A\u0430\u043D\u0430\u043B \u041F\u0430\u043D\u0430\u043C\u0430",
        correct: true
      }, {
        id: 2,
        value: "\u041A\u0430\u043D\u0430\u043B \u0421\u0443\u044D\u0446",
        correct: false
      }, {
        id: 3,
        value: "\u041A\u0430\u043D\u0430\u043B \u0421\u0435\u0432\u0435\u0440-\u042E\u0433",
        correct: false
      }, {
        id: 4,
        value: "\u041A\u0430\u043D\u0430\u043B \u041C\u0430\u043D\u0447\u0435\u0441\u0442\u0435\u0440",
        correct: false
      }, {
        id: 5,
        value: "\u041A\u0430\u043D\u0430\u043B \u041D\u043E\u0440\u0444\u043E\u043B\u043A",
        correct: false
      }]
    }, {
      question: "\u041A\u0430\u043A\u043E\u0439 \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \"\u0412\u0435\u043D\u0435\u0446\u0438\u0435\u0439 \u0421\u0435\u0432\u0435\u0440\u0430\" \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0441\u0432\u043E\u0438\u043C \u043A\u0430\u043D\u0430\u043B\u0430\u043C \u0438 \u043C\u043E\u0441\u0442\u0430\u043C, \n\t\t\t\t\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u043C \u043D\u0430\u0434 \u0428\u0442\u043E\u043A\u0433\u043E\u043B\u044C\u043C\u0441\u043A\u0438\u043C \u0430\u0440\u0445\u0438\u043F\u0435\u043B\u0430\u0433\u043E\u043C?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u0410\u043C\u0441\u0442\u0435\u0440\u0434\u0430\u043C \u2014 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u0430\u044F \u0441\u0442\u043E\u043B\u0438\u0446\u0430 \u041D\u0438\u0434\u0435\u0440\u043B\u0430\u043D\u0434\u043E\u0432, \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u0441\u0432\u043E\u0438\u043C\u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \n\t\t\t\t\t\t\u043A\u0430\u043D\u0430\u043B\u0430\u043C\u0438 \u0438 \u0432\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043E\u0439.",
        correct: false
      }, {
        id: 1,
        value: "\u0412\u0435\u043D\u0435\u0446\u0438\u044F \u2014 \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u0433\u043E\u0440\u043E\u0434, \u043B\u0435\u0436\u0430\u0449\u0438\u0439 \u043D\u0430 118 \u043E\u0441\u0442\u0440\u043E\u0432\u0430\u0445, \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0441\u0432\u043E\u0438\u043C\u0438 \u043A\u0430\u043D\u0430\u043B\u0430\u043C\u0438, \n\t\t\t\t\t\t\u0433\u043E\u043D\u0434\u043E\u043B\u0430\u043C\u0438 \u0438 \u0432\u0435\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u0438\u043B\u0438\u043A\u043E\u0439 \u0421\u0432\u044F\u0442\u043E\u0433\u043E \u041C\u0430\u0440\u043A\u0430.",
        correct: false
      }, {
        id: 2,
        value: "\u0421\u0442\u043E\u043A\u0433\u043E\u043B\u044C\u043C \u2014 \u0441\u0442\u043E\u043B\u0438\u0446\u0430 \u0428\u0432\u0435\u0446\u0438\u0438, \u0432\u043E\u0437\u0432\u044B\u0448\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u043D\u0430\u0434 \u0411\u0430\u043B\u0442\u0438\u0439\u0441\u043A\u0438\u043C \u043C\u043E\u0440\u0435\u043C, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043B\u0430\u0432\u0438\u0442\u0441\u044F \u0441\u0432\u043E\u0438\u043C\u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u043C\u0438 \n\t\t\t\t\t\t\u0444\u044C\u043E\u0440\u0434\u0430\u043C\u0438, \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0437\u0430\u043C\u043A\u0430\u043C\u0438 \u0438 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u043C\u0443\u0437\u0435\u044F\u043C\u0438.",
        correct: true
      }]
    }]
  }, {
    id: 1,
    name: 'Программирование',
    time: 2000,
    descr: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u0432\u0438\u0437 \u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438! \n\t\t\u0412 \u044D\u0442\u043E\u043C \u0443\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043A\u0432\u0438\u0437\u0435 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. \n\t\t\u0412\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0442\u0440\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0437\u0430\u0442\u0440\u043E\u043D\u0443\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0430\u0441\u043F\u0435\u043A\u0442\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \n\t\t\u0432\u043A\u043B\u044E\u0447\u0430\u044F \u044F\u0437\u044B\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F, \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B \u0438 \u043B\u043E\u0433\u0438\u043A\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. \n\t\t\u041F\u043E\u0434\u0442\u044F\u043D\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0435\u0431\u044F \u0438 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044C \u044D\u0442\u0438\u043C \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C \u043A\u0432\u0438\u0437\u043E\u043C \u043E \u043C\u0438\u0440\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F!",
    questions: [{
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \"\u0437\u0430\u043C\u044B\u043A\u0430\u043D\u0438\u0435\" (closure) \u0432 JavaScript?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u042D\u0442\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u043C JavaScript \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \n\t\t\t\t\t\t\u0442\u0438\u043F\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430.",
        correct: false
      }, {
        id: 1,
        value: "\u042D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043B\u043E\u0432\u0430 \"var\".",
        correct: false
      }, {
        id: 2,
        value: "\u042D\u0442\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0432\u043D\u0435\u0448\u043D\u0438\u043C \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0441\u0432\u043E\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430.",
        correct: false
      }, {
        id: 3,
        value: "\u042D\u0442\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0438\u043C\u0435\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u043C \u0438\u0437 \u0441\u0432\u043E\u0435\u0433\u043E \u043B\u0435\u043A\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u044F, \n\t\t\t\t\t\t\u0434\u0430\u0436\u0435 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F.",
        correct: true
      }]
    }, {
      question: "\u041A\u0430\u043A\u043E\u0439 \u0438\u0437 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u043D\u0438\u0436\u0435 \u043F\u0430\u0442\u0442\u0435\u0440\u043D\u043E\u0432 JavaScript \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0430\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u044B\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439?",
      type: "options",
      answers: [{
        id: 0,
        value: "Singleton",
        correct: false
      }, {
        id: 1,
        value: "Observer",
        correct: false
      }, {
        id: 2,
        value: "Factory",
        correct: false
      }, {
        id: 3,
        value: "Promise",
        correct: true
      }]
    }, {
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 RESTful API?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u042D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0440\u0435\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
        correct: false
      }, {
        id: 1,
        value: "\u042D\u0442\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F HTML-\u043A\u043E\u0434\u0430 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445.",
        correct: false
      }, {
        id: 2,
        value: "\u042D\u0442\u043E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0432\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432.",
        correct: true
      }, {
        id: 3,
        value: "\u042D\u0442\u043E \u044F\u0437\u044B\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445.",
        correct: false
      }]
    }, {
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043F\u0440\u0438\u043D\u0446\u0438\u043F SOLID \u0432 \u043E\u0431\u044A\u0435\u043A\u0442\u043D\u043E-\u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u042D\u0442\u043E \u043D\u0430\u0431\u043E\u0440 \u0431\u0430\u0437\u043E\u0432\u044B\u0445 \u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043B\u044F \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0441\u0442\u0438\u043B\u0435\u0439 CSS.",
        correct: false
      }, {
        id: 1,
        value: " \u042D\u0442\u043E \u043F\u0440\u0438\u043D\u0446\u0438\u043F \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0430\u0437 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0438\u0445 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u0446\u0435\u043B\u043E\u0441\u0442\u043D\u043E\u0441\u0442\u0438.",
        correct: false
      }, {
        id: 2,
        value: "\u042D\u0442\u043E \u043D\u0430\u0431\u043E\u0440 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0447\u0438\u0441\u0442\u044B\u0439 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043A\u043E\u0434.",
        correct: true
      }, {
        id: 3,
        value: "\u042D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 JavaScript \u0432 \u043E\u0434\u0438\u043D \u0434\u043B\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.",
        correct: false
      }]
    }]
  }, {
    id: 2,
    name: 'Экономика',
    time: 600,
    descr: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u0432\u0438\u0437 \u043F\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435! \n\t\t\u0412 \u044D\u0442\u043E\u043C \u0443\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043A\u0432\u0438\u0437\u0435 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0438. \n\t\t\u0412\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0442\u0440\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0430\u0441\u043F\u0435\u043A\u0442\u044B \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u043E\u0440\u0438\u0438, \n\t\t\u043C\u0438\u0440\u043E\u0432\u0443\u044E \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0438 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438. \n\t\t\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F, \u0440\u0430\u0441\u0448\u0438\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u043F\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435 \u0438 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044C \u044D\u0442\u0438\u043C \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C \u043A\u0432\u0438\u0437\u043E\u043C!",
    questions: [{
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0438\u043D\u0444\u043B\u044F\u0446\u0438\u044F?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u042D\u0442\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0446\u0435\u043D \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435.",
        correct: false
      }, {
        id: 1,
        value: "\u042D\u0442\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0438 \u0443\u0440\u043E\u0432\u043D\u044F \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439.",
        correct: false
      }, {
        id: 2,
        value: "\u042D\u0442\u043E \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0431\u0435\u0437\u0440\u0430\u0431\u043E\u0442\u0438\u0446\u044B \u0432 \u0441\u0442\u0440\u0430\u043D\u0435.",
        correct: false
      }, {
        id: 3,
        value: "\u042D\u0442\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043E\u0431\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0446\u0435\u043D \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435 \u0441\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0435\u043C.",
        correct: true
      }]
    }, {
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F?",
      type: "options",
      answers: [{
        id: 0,
        value: "\u0423\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043B\u043E\u0433\u043E\u0432",
        correct: false
      }, {
        id: 1,
        value: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
        correct: false
      }, {
        id: 2,
        value: "\u0420\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439",
        correct: true
      }]
    }, {
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0441\u043F\u0440\u043E\u0441 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u0421\u043F\u0440\u043E\u0441 - \u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C, \n\t\t\t\t\t\t\u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 - \u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438 \u0445\u043E\u0442\u044F\u0442 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438.",
        correct: false
      }, {
        id: 1,
        value: "\u0421\u043F\u0440\u043E\u0441 - \u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438 \u0445\u043E\u0442\u044F\u0442 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438, \u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \n\t\t\t\t\t\t- \u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C.",
        correct: true
      }, {
        id: 2,
        value: "\u0421\u043F\u0440\u043E\u0441 - \u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u0445\u043E\u0442\u044F\u0442 \u043F\u0440\u043E\u0434\u0430\u0442\u044C, \u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 - \n\t\t\t\t\t\t\u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043A\u0443\u043F\u0438\u0442\u044C.",
        correct: false
      }, {
        id: 3,
        value: "\u0421\u043F\u0440\u043E\u0441 - \u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438, \u0430 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 - \n\t\t\t\t\t\t\u044D\u0442\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u0443\u0441\u043B\u0443\u0433, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0438 \u0445\u043E\u0442\u044F\u0442 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438.",
        correct: false
      }]
    }, {
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u0432 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u042D\u0442\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043D\u0430 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435.",
        correct: false
      }, {
        id: 1,
        value: "\u042D\u0442\u043E \u0434\u0435\u043D\u044C\u0433\u0438, \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u0438.",
        correct: false
      }, {
        id: 2,
        value: "\u042D\u0442\u043E \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043B\u044E\u0434\u0438 \u0445\u0440\u0430\u043D\u044F\u0442 \u0432 \u0431\u0430\u043D\u043A\u0430\u0445.",
        correct: false
      }, {
        id: 3,
        value: "\u042D\u0442\u043E \u043A\u0430\u043F\u0438\u0442\u0430\u043B, \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0432 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F, \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \n\t\t\t\t\t\t\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u044B \u0441 \u0446\u0435\u043B\u044C\u044E \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u043F\u0440\u0438\u0431\u044B\u043B\u0438.",
        correct: true
      }]
    }]
  }, {
    id: 3,
    name: 'Менеджмент',
    time: 7200,
    descr: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u0432\u0438\u0437 \u043F\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0443! \n\t\t\u0412 \u044D\u0442\u043E\u043C \u0443\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043A\u0432\u0438\u0437\u0435 \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430 \u0438 \u043B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u0430. \n\t\t\u0412\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0442\u0440\u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u0430\u0441\u0430\u044E\u0442\u0441\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0430\u0441\u043F\u0435\u043A\u0442\u043E\u0432 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u043E\u043C, \n\t\t\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u0430, \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 \u0438 \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432. \n\t\t\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430, \u0440\u0430\u0441\u0448\u0438\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\n\t\t\u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044C \u044D\u0442\u0438\u043C \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C \u043A\u0432\u0438\u0437\u043E\u043C!",
    questions: [{
      question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 SWOT-\u0430\u043D\u0430\u043B\u0438\u0437?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438",
        correct: false
      }, {
        id: 1,
        value: "\u041C\u0435\u0442\u043E\u0434 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432",
        correct: false
      }, {
        id: 2,
        value: "\u041C\u0435\u0442\u043E\u0434\u0438\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439",
        correct: false
      }, {
        id: 3,
        value: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0430",
        correct: true
      }]
    }, {
      question: "\u0427\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0442\u0435\u0440\u043C\u0438\u043D \"\u0434\u0435\u043B\u0435\u0433\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\"?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
        correct: false
      }, {
        id: 1,
        value: "\u041F\u043E\u0434\u043C\u0435\u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u0439",
        correct: false
      }, {
        id: 2,
        value: "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u0439 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C",
        correct: true
      }, {
        id: 3,
        value: "\u0417\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432",
        correct: false
      }, {
        id: 4,
        value: "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0441\u0440\u043E\u043A\u043E\u0432 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438",
        correct: true
      }]
    }, {
      question: "\u0427\u0442\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \"\u0442\u0438\u043C\u0431\u0438\u043B\u0434\u0438\u043D\u0433\"?",
      type: "options",
      answers: [{
        id: 0,
        value: "\u0414\u043E\u0432\u0435\u0440\u0438\u0435 \u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
        correct: false
      }, {
        id: 1,
        value: "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u044B",
        correct: false
      }, {
        id: 2,
        value: "\u041A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435",
        correct: false
      }, {
        id: 3,
        value: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B",
        correct: true
      }]
    }, {
      question: "\u0427\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u0442\u0435\u0440\u043C\u0438\u043D \"\u044D\u043C\u043F\u043E\u0432\u0435\u0440\u043C\u0435\u043D\u0442\" (empowerment) \u0432 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439?",
      type: "text",
      answers: [{
        id: 0,
        value: "\u041C\u0435\u0442\u043E\u0434\u0438\u043A\u0430 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043D\u043E\u0433\u043E \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
        correct: false
      }, {
        id: 1,
        value: "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u0439 \u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u0434\u043B\u044F \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u0439",
        correct: true
      }, {
        id: 2,
        value: "\u041C\u0435\u0442\u043E\u0434 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u044B",
        correct: false
      }, {
        id: 3,
        value: "\u041F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439 \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
        correct: false
      }]
    }]
  }];

  var App = /*#__PURE__*/function (_DOMHelper) {
    _inherits(App, _DOMHelper);
    var _super = _createSuper(App);
    function App() {
      _classCallCheck(this, App);
      return _super.apply(this, arguments);
    }
    _createClass(App, [{
      key: "init",
      value: function init() {
        this.renderStartPage();
        this.renderTestsList();
      }
    }, {
      key: "renderStartPage",
      value: function renderStartPage() {
        this.appInnerElement.innerHTML = "\n          <div class=\"test-start\">\n            <span>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u0441\u0442 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430</span>\n          </div>\n        ";
      }
    }, {
      key: "renderTestsList",
      value: function renderTestsList() {
        var _this = this;
        try {
          DATA_TESTS.forEach(function (item) {
            _this.sidebarLinksElement.insertAdjacentHTML('beforeend', "\n              <li class=\"sidebar__link\" data-test=\"".concat(item.id, "\"><span></span><a href=\"#\">").concat(item.name, "</a></li>\n            "));
          });
        } catch (error) {
          console.error('Ошибка при редеринге списка тестов: ', error);
        }
      }
    }]);
    return App;
  }(DOMHelper);
  var appInstance = new App();

  var UserResponses = /*#__PURE__*/function () {
    function UserResponses() {
      _classCallCheck(this, UserResponses);
      this.localResults = {};
    }
    _createClass(UserResponses, [{
      key: "setResponce",
      value: function setResponce(questionIndex, answerIndex) {
        this.localResults[questionIndex] = answerIndex;
      }
    }, {
      key: "getResponce",
      value: function getResponce(questionIndex) {
        return this.localResults[questionIndex];
      }
    }, {
      key: "resetResponce",
      value: function resetResponce() {
        this.localResults = {};
      }
    }]);
    return UserResponses;
  }();
  var userResponses = new UserResponses();

  var Utility = /*#__PURE__*/function (_DOMHelper) {
    _inherits(Utility, _DOMHelper);
    var _super = _createSuper(Utility);
    function Utility() {
      _classCallCheck(this, Utility);
      return _super.apply(this, arguments);
    }
    _createClass(Utility, [{
      key: "hideSidebar",
      value: function hideSidebar(sidebarElement) {
        sidebarElement.classList.remove('sidebar--active');
      }
    }, {
      key: "showSidebar",
      value: function showSidebar(sidebarElement) {
        sidebarElement.classList.add('sidebar--active');
      }
    }, {
      key: "openModal",
      value: function openModal(modalElement) {
        modalElement.classList.add('modal--active');
      }
    }, {
      key: "closeModal",
      value: function closeModal(modalElement) {
        modalElement.classList.remove('modal--active');
      }
    }, {
      key: "getCurrentTest",
      value: function getCurrentTest() {
        var activeTest = this.appElement.querySelector('.sidebar__link--active');
        return DATA_TESTS[activeTest.dataset.test];
      }
    }, {
      key: "resetAnswers",
      value: function resetAnswers() {
        var checkedInputs = this.appElement.querySelectorAll('.question__answer-input');
        for (var i = 0; i < checkedInputs.length; i++) {
          checkedInputs[i].checked = false;
        }
        userResponses.resetResponce();
      }
    }]);
    return Utility;
  }(DOMHelper);
  var utilityInstance = new Utility();

  var Render = /*#__PURE__*/function (_DOMHelper) {
    _inherits(Render, _DOMHelper);
    var _super = _createSuper(Render);
    function Render() {
      _classCallCheck(this, Render);
      return _super.apply(this, arguments);
    }
    _createClass(Render, [{
      key: "renderDescription",
      value: function renderDescription(testObj) {
        this.appInnerElement.innerHTML = "\n        <div class=\"top-panel\">\n            <div class=\"top-panel__inner\">\n            <div class=\"top-panel__left\">\n                <span class=\"top-panel__descr\">\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</span>\n            </div>\n            </div>\n        </div>\n        <div class=\"test-mobile-content\">\n            <div class=\"test-mobile-content__mobile-info\">\n            <h2>".concat(testObj.name, "</h2>\n            </div>\n        </div>\n        <div class=\"test-descr\">\n            <p>").concat(testObj.descr, "</p>\n            <div class=\"test-descr-buttons\">\n            <a class=\"btn-primary btn-start\" data-test=\"").concat(testObj.id, "\" href=\"#\">\u041D\u0430\u0447\u0430\u0442\u044C</a>\n            <a class=\"btn-secondary btn-cancel\" href=\"#\">\u041E\u0442\u043C\u0435\u043D\u0430</a>\n            </div>\n        </div>");
      }
    }, {
      key: "renderTest",
      value: function renderTest(testObj) {
        this.appInnerElement.innerHTML = "\n\t\t<div class=\"top-panel\">\n\t\t\t<div class=\"top-panel__inner\">\n\t\t\t\t<div class=\"top-panel__left\">\n\t\t\t\t\t<a class=\"top-panel__exit js-modal-open\" data-modal=\"modal-exit\">\u0412\u044B\u0445\u043E\u0434</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"top-panel__center\">\n\t\t\t\t\t<span class=\"top-panel__test-name\">".concat(testObj.name, "</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"top-panel__right\">\n\t\t\t\t\t<div class=\"top-panel__reset\">\n\t\t\t\t\t\t<span class=\"top-panel__reset-btn\">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u043E\u0442\u0432\u0435\u0442\u044B</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"top-panel__mobile-column\">\n\t\t\t\t\t\t<div class=\"top-panel__progress\">\n\t\t\t\t\t\t\t<span>0/").concat(testObj.questions.length, "</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"top-panel__timer\">\n\t\t\t\t\t\t\t<span>00:00:00</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"test-mobile-content\">\n\t\t\t<div class=\"test-mobile-content__mobile-info\">\n\t\t\t\t<h2>").concat(testObj.name, "</h2>\n\t\t\t\t<a class=\"js-modal-open\" data-modal=\"modal-exit\">\u0412\u044B\u0445\u043E\u0434</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"test\">\n\t\t\t\n\t\t</div>\n\t\t<div class=\"bottom-panel\">\n\t\t\t<a class=\"btn-primary btn-primary-outline btn-get-results\" href=\"#\">\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C</a>\n\t\t</div>");
      }
    }, {
      key: "renderQuestions",
      value: function renderQuestions(testObj) {
        var test = this.appElement.querySelector('.test');
        test.innerHTML = testObj.questions.map(function (question, index) {
          var answers = question.answers.map(function (answer) {
            return "\n                  <label class=\"question__answer\">\n                    <input class=\"question__answer-input\" type=\"radio\" name=\"".concat(index, "\" value=\"").concat(answer.id, "\">\n                    <span class=\"radio-custom\"></span>\n                    ").concat(answer.value, "\n                  </label>\n                ");
          }).join('');
          return "\n              <div class=\"question question--".concat(question.type, "\">\n                <div class=\"question__content\">\n                  <span class=\"question__number\">").concat(index + 1, ". </span>\n                  <span class=\"question__text\">").concat(question.question, "</span>\n                </div>\n                <div class=\"question__answers\">\n                  <form class=\"question__answers-list\">").concat(answers, "</form>\n                </div>\n              </div>\n            ");
        }).join('');
      }
    }, {
      key: "renderResults",
      value: function renderResults(testObj, results) {
        var keys = Object.keys(results);
        this.appInnerElement.innerHTML = "\n          <div class=\"top-panel\">\n          <div class=\"top-panel__inner\">\n          <div class=\"top-panel__left\">\n              <a class=\"top-panel__exit js-modal-open\" data-modal=\"modal-exit\">\u0412\u044B\u0445\u043E\u0434</a>\n          </div>\n          <div class=\"top-panel__center\">\n              <span class=\"top-panel__test-name\">".concat(testObj.name, "</span>\n          </div>\n              </div>\n          </div>\n          <div class=\"test-mobile-content\">\n          <div class=\"test-mobile-content__mobile-info\">\n              <h2>").concat(testObj.name, "</h2>\n              <a class=\"js-modal-open\" data-modal=\"modal-exit\">\u0412\u044B\u0445\u043E\u0434</a>\n          </div>\n            </div>\n          <div class=\"test-results\">\n            <div class=\"test-results__info\">\n              <h2>\u0422\u0435\u0441\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D</h2>\n              <p>\u0412\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043D\u0430 <span class=\"test-results__answered\">").concat(keys.length, "</span> \u0438\u0437\n                <span class=\"test-results__total\">").concat(testObj.questions.length, "</span> \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432.</p>\n            </div>\n            <div class=\"test-results__list\">\n              <p class=\"test-results__heading\">\u0412\u0430\u0448\u0438 \u043E\u0442\u0432\u0435\u0442\u044B</p>\n            </div>\n          </div>\n          <div class=\"bottom-panel\">\n            <a class=\"btn-primary btn-primary-outline btn-restart\" href=\"#\">\u041F\u0440\u043E\u0439\u0442\u0438 \u0435\u0449\u0435 \u0440\u0430\u0437</a>\n          </div>");
        var resultsArea = this.appElement.querySelector('.test-results__list');
        var questions = testObj.questions;
        questions.forEach(function (item, i) {
          var trueAnswer = '';
          item.answers.forEach(function (answer) {
            if (answer.correct === true) trueAnswer = answer.value;
          });
          var userAnswerIndex = results[i];
          var userAnswer = '';
          if (typeof userAnswerIndex !== 'undefined') {
            var userAnswerObject = item.answers[userAnswerIndex];
            userAnswer = userAnswerObject ? userAnswerObject.value : 'Не ответили';
          } else {
            userAnswer = 'Не ответили';
          }
          resultsArea.insertAdjacentHTML('beforeend', "\n            <div class=\"test-results__item\">\n              <p class=\"test-results__question\">\n                <span class=\"test-results__question-number\">".concat(i + 1, ".</span>\n                <span class=\"test-results__question-text\">").concat(item.question, "</span>\n              </p>\n              <p class=\"test-results__correct-answer\">\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442:\n                <span class=\"test-results__correct-answer-text\">").concat(trueAnswer, "</span>\n              </p>\n              <p class=\"test-results__your-answer\">\u0412\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438:\n                <span class=\"test-results__your-answer-text\">").concat(userAnswer, "</span>\n              </p>\n            </div>\n            "));
        });
      }
    }, {
      key: "renderIndicator",
      value: function renderIndicator(currStep, testObj) {
        var questionsIndicator = this.appElement.querySelector('.top-panel__progress span');
        questionsIndicator.textContent = "".concat(currStep, "/").concat(testObj.questions.length);
      }
    }]);
    return Render;
  }(DOMHelper);
  var renderInstance = new Render();

  var Timer = /*#__PURE__*/function () {
    function Timer() {
      _classCallCheck(this, Timer);
      this.timer = 0;
      this.timerInterval = 0;
    }
    _createClass(Timer, [{
      key: "startTimer",
      value: function startTimer(duration, displayElem) {
        var _this = this;
        this.timer = duration;
        var currTest = utilityInstance.getCurrentTest();
        this.timerInterval = setInterval(function () {
          var hours = Math.floor(_this.timer / 3600);
          var minutes = Math.floor(_this.timer % 3600 / 60);
          var seconds = _this.timer % 60;
          displayElem.textContent = "".concat(hours < 10 ? '0' : '').concat(hours, ":").concat(minutes < 10 ? '0' : '').concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds);
          _this.timer--;
          if (_this.timer < 0) {
            clearInterval(_this.timerInterval);
            renderInstance.renderResults(currTest, userResponses.localResults);
          }
        }, 1000);
      }
    }, {
      key: "resetTimer",
      value: function resetTimer() {
        this.timer = 0;
        clearInterval(this.timerInterval);
      }
    }]);
    return Timer;
  }();
  var timerInstance = new Timer();

  var Handlers = /*#__PURE__*/function (_DOMHelper) {
    _inherits(Handlers, _DOMHelper);
    var _super = _createSuper(Handlers);
    function Handlers() {
      var _this;
      _classCallCheck(this, Handlers);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "changeAnswer", function (event) {
        if (event.target.classList.contains('question__answer-input')) {
          userResponses.setResponce(event.target.name, event.target.value);
          var currStep = Object.keys(userResponses.localResults).length;
          var currTest = utilityInstance.getCurrentTest();
          renderInstance.renderIndicator(currStep, currTest);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "documentClick", function (event) {
        var target = event.target;

        // Sidebar

        if (target.classList.contains('hamburger')) {
          var sidebarIsActive = _this.sidebarElement.classList.contains('sidebar--active');
          if (sidebarIsActive) {
            utilityInstance.hideSidebar(_this.sidebarElement);
            localStorage.setItem('sidebarState', JSON.stringify({
              isOpen: false
            }));
          } else {
            utilityInstance.showSidebar(_this.sidebarElement);
            localStorage.setItem('sidebarState', JSON.stringify({
              isOpen: true
            }));
          }
        }
        if (target.classList.contains('sidebar__link') && window.innerWidth < 769) {
          utilityInstance.hideSidebar(_this.sidebarElement);
        }

        // Test Description

        if (target.classList.contains('sidebar__link')) {
          var test = _this.appInnerElement.querySelector('.test');
          var testResults = _this.appInnerElement.querySelector('.test-results');
          if (test || testResults) {
            var modal = document.getElementById('modal-exit');
            utilityInstance.openModal(modal);
            return;
          }
          var activeTest = _this.appElement.querySelector('.sidebar__link--active');
          if (activeTest) activeTest.classList.remove('sidebar__link--active');
          target.classList.add('sidebar__link--active');
          var currTest = DATA_TESTS[target.dataset.test];
          renderInstance.renderDescription(currTest);
        }

        // Cancel Button

        if (target.classList.contains('btn-cancel')) {
          event.preventDefault();
          var _activeTest = _this.appElement.querySelector('.sidebar__link--active');
          _activeTest.classList.remove('sidebar__link--active');
          appInstance.renderStartPage();
        }

        // Starting Test

        if (target.classList.contains('btn-start') || target.classList.contains('btn-restart')) {
          event.preventDefault();
          userResponses.resetResponce();
          timerInstance.resetTimer();
          var _currTest = utilityInstance.getCurrentTest();
          renderInstance.renderTest(_currTest);
          renderInstance.renderQuestions(_currTest);
          var timerElem = document.querySelector('.top-panel__timer');
          timerInstance.startTimer(_currTest.time, timerElem);
        }

        // Reset Answers
        if (target.classList.contains('top-panel__reset-btn')) {
          var _currTest2 = utilityInstance.getCurrentTest();
          utilityInstance.resetAnswers();
          renderInstance.renderIndicator(0, _currTest2);
        }

        // Results

        if (target.classList.contains('btn-get-results')) {
          event.preventDefault();
          var _currTest3 = utilityInstance.getCurrentTest();
          renderInstance.renderResults(_currTest3, userResponses.localResults);
        }

        // Modals

        if (target.classList.contains('js-modal-open')) {
          var modalId = target.dataset.modal;
          var _modal = document.getElementById(modalId);
          utilityInstance.openModal(_modal);
        }
        if (target.classList.contains('js-modal-close') || target.classList.contains('modal--active')) {
          var activeModal = document.querySelector('.modal--active');
          utilityInstance.closeModal(activeModal);
        }
      });
      return _this;
    }
    return _createClass(Handlers);
  }(DOMHelper);
  var handlersInstance = new Handlers();

  appInstance.init();

  // Sidebar localStorage state

  if (window.innerWidth > 768) {
    try {
      var savedState = localStorage.getItem('sidebarState');
      var _JSON$parse = JSON.parse(savedState),
        isOpen = _JSON$parse.isOpen;
      if (isOpen) {
        utilityInstance.showSidebar(domInstance.sidebarElement);
      } else {
        utilityInstance.hideSidebar(domInstance.sidebarElement);
      }
    } catch (error) {
      localStorage.setItem('sidebarState', JSON.stringify({
        isOpen: false
      }));
    }
  }

  // Event Listeners

  domInstance.appElement.addEventListener('change', handlersInstance.changeAnswer);
  document.addEventListener('click', handlersInstance.documentClick);

})();
//# sourceMappingURL=main.bundle.js.map
