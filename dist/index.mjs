var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/credit-card-type/dist/lib/card-types.js
var require_card_types = __commonJS({
  "node_modules/credit-card-type/dist/lib/card-types.js"(exports, module) {
    "use strict";
    var cardTypes = {
      visa: {
        niceType: "Visa",
        type: "visa",
        patterns: [4],
        gaps: [4, 8, 12],
        lengths: [16, 18, 19],
        code: {
          name: "CVV",
          size: 3
        }
      },
      mastercard: {
        niceType: "Mastercard",
        type: "mastercard",
        patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
          name: "CVC",
          size: 3
        }
      },
      "american-express": {
        niceType: "American Express",
        type: "american-express",
        patterns: [34, 37],
        gaps: [4, 10],
        lengths: [15],
        code: {
          name: "CID",
          size: 4
        }
      },
      "diners-club": {
        niceType: "Diners Club",
        type: "diners-club",
        patterns: [[300, 305], 36, 38, 39],
        gaps: [4, 10],
        lengths: [14, 16, 19],
        code: {
          name: "CVV",
          size: 3
        }
      },
      discover: {
        niceType: "Discover",
        type: "discover",
        patterns: [6011, [644, 649], 65],
        gaps: [4, 8, 12],
        lengths: [16, 19],
        code: {
          name: "CID",
          size: 3
        }
      },
      jcb: {
        niceType: "JCB",
        type: "jcb",
        patterns: [2131, 1800, [3528, 3589]],
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: {
          name: "CVV",
          size: 3
        }
      },
      unionpay: {
        niceType: "UnionPay",
        type: "unionpay",
        patterns: [
          620,
          [624, 626],
          [62100, 62182],
          [62184, 62187],
          [62185, 62197],
          [62200, 62205],
          [622010, 622999],
          622018,
          [622019, 622999],
          [62207, 62209],
          [622126, 622925],
          [623, 626],
          6270,
          6272,
          6276,
          [627700, 627779],
          [627781, 627799],
          [6282, 6289],
          6291,
          6292,
          810,
          [8110, 8131],
          [8132, 8151],
          [8152, 8163],
          [8164, 8171]
        ],
        gaps: [4, 8, 12],
        lengths: [14, 15, 16, 17, 18, 19],
        code: {
          name: "CVN",
          size: 3
        }
      },
      maestro: {
        niceType: "Maestro",
        type: "maestro",
        patterns: [
          493698,
          [5e5, 504174],
          [504176, 506698],
          [506779, 508999],
          [56, 59],
          63,
          67,
          6
        ],
        gaps: [4, 8, 12],
        lengths: [12, 13, 14, 15, 16, 17, 18, 19],
        code: {
          name: "CVC",
          size: 3
        }
      },
      elo: {
        niceType: "Elo",
        type: "elo",
        patterns: [
          401178,
          401179,
          438935,
          457631,
          457632,
          431274,
          451416,
          457393,
          504175,
          [506699, 506778],
          [509e3, 509999],
          627780,
          636297,
          636368,
          [650031, 650033],
          [650035, 650051],
          [650405, 650439],
          [650485, 650538],
          [650541, 650598],
          [650700, 650718],
          [650720, 650727],
          [650901, 650978],
          [651652, 651679],
          [655e3, 655019],
          [655021, 655058]
        ],
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
          name: "CVE",
          size: 3
        }
      },
      mir: {
        niceType: "Mir",
        type: "mir",
        patterns: [[2200, 2204]],
        gaps: [4, 8, 12],
        lengths: [16, 17, 18, 19],
        code: {
          name: "CVP2",
          size: 3
        }
      },
      hiper: {
        niceType: "Hiper",
        type: "hiper",
        patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
          name: "CVC",
          size: 3
        }
      },
      hipercard: {
        niceType: "Hipercard",
        type: "hipercard",
        patterns: [606282],
        gaps: [4, 8, 12],
        lengths: [16],
        code: {
          name: "CVC",
          size: 3
        }
      }
    };
    module.exports = cardTypes;
  }
});

// node_modules/credit-card-type/dist/lib/clone.js
var require_clone = __commonJS({
  "node_modules/credit-card-type/dist/lib/clone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clone = void 0;
    function clone(originalObject) {
      if (!originalObject) {
        return null;
      }
      return JSON.parse(JSON.stringify(originalObject));
    }
    exports.clone = clone;
  }
});

// node_modules/credit-card-type/dist/lib/matches.js
var require_matches = __commonJS({
  "node_modules/credit-card-type/dist/lib/matches.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matches = void 0;
    function matchesRange(cardNumber, min, max) {
      var maxLengthToCheck = String(min).length;
      var substr = cardNumber.substr(0, maxLengthToCheck);
      var integerRepresentationOfCardNumber = parseInt(substr, 10);
      min = parseInt(String(min).substr(0, substr.length), 10);
      max = parseInt(String(max).substr(0, substr.length), 10);
      return integerRepresentationOfCardNumber >= min && integerRepresentationOfCardNumber <= max;
    }
    function matchesPattern(cardNumber, pattern) {
      pattern = String(pattern);
      return pattern.substring(0, cardNumber.length) === cardNumber.substring(0, pattern.length);
    }
    function matches(cardNumber, pattern) {
      if (Array.isArray(pattern)) {
        return matchesRange(cardNumber, pattern[0], pattern[1]);
      }
      return matchesPattern(cardNumber, pattern);
    }
    exports.matches = matches;
  }
});

// node_modules/credit-card-type/dist/lib/add-matching-cards-to-results.js
var require_add_matching_cards_to_results = __commonJS({
  "node_modules/credit-card-type/dist/lib/add-matching-cards-to-results.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addMatchingCardsToResults = void 0;
    var clone_1 = require_clone();
    var matches_1 = require_matches();
    function addMatchingCardsToResults(cardNumber, cardConfiguration, results) {
      var i, patternLength;
      for (i = 0; i < cardConfiguration.patterns.length; i++) {
        var pattern = cardConfiguration.patterns[i];
        if (!matches_1.matches(cardNumber, pattern)) {
          continue;
        }
        var clonedCardConfiguration = clone_1.clone(cardConfiguration);
        if (Array.isArray(pattern)) {
          patternLength = String(pattern[0]).length;
        } else {
          patternLength = String(pattern).length;
        }
        if (cardNumber.length >= patternLength) {
          clonedCardConfiguration.matchStrength = patternLength;
        }
        results.push(clonedCardConfiguration);
        break;
      }
    }
    exports.addMatchingCardsToResults = addMatchingCardsToResults;
  }
});

// node_modules/credit-card-type/dist/lib/is-valid-input-type.js
var require_is_valid_input_type = __commonJS({
  "node_modules/credit-card-type/dist/lib/is-valid-input-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isValidInputType = void 0;
    function isValidInputType(cardNumber) {
      return typeof cardNumber === "string" || cardNumber instanceof String;
    }
    exports.isValidInputType = isValidInputType;
  }
});

// node_modules/credit-card-type/dist/lib/find-best-match.js
var require_find_best_match = __commonJS({
  "node_modules/credit-card-type/dist/lib/find-best-match.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findBestMatch = void 0;
    function hasEnoughResultsToDetermineBestMatch(results) {
      var numberOfResultsWithMaxStrengthProperty = results.filter(function(result) {
        return result.matchStrength;
      }).length;
      return numberOfResultsWithMaxStrengthProperty > 0 && numberOfResultsWithMaxStrengthProperty === results.length;
    }
    function findBestMatch(results) {
      if (!hasEnoughResultsToDetermineBestMatch(results)) {
        return null;
      }
      return results.reduce(function(bestMatch, result) {
        if (!bestMatch) {
          return result;
        }
        if (Number(bestMatch.matchStrength) < Number(result.matchStrength)) {
          return result;
        }
        return bestMatch;
      });
    }
    exports.findBestMatch = findBestMatch;
  }
});

// node_modules/credit-card-type/dist/index.js
var require_dist = __commonJS({
  "node_modules/credit-card-type/dist/index.js"(exports, module) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var cardTypes = require_card_types();
    var add_matching_cards_to_results_1 = require_add_matching_cards_to_results();
    var is_valid_input_type_1 = require_is_valid_input_type();
    var find_best_match_1 = require_find_best_match();
    var clone_1 = require_clone();
    var customCards = {};
    var cardNames = {
      VISA: "visa",
      MASTERCARD: "mastercard",
      AMERICAN_EXPRESS: "american-express",
      DINERS_CLUB: "diners-club",
      DISCOVER: "discover",
      JCB: "jcb",
      UNIONPAY: "unionpay",
      MAESTRO: "maestro",
      ELO: "elo",
      MIR: "mir",
      HIPER: "hiper",
      HIPERCARD: "hipercard"
    };
    var ORIGINAL_TEST_ORDER = [
      cardNames.VISA,
      cardNames.MASTERCARD,
      cardNames.AMERICAN_EXPRESS,
      cardNames.DINERS_CLUB,
      cardNames.DISCOVER,
      cardNames.JCB,
      cardNames.UNIONPAY,
      cardNames.MAESTRO,
      cardNames.ELO,
      cardNames.MIR,
      cardNames.HIPER,
      cardNames.HIPERCARD
    ];
    var testOrder = clone_1.clone(ORIGINAL_TEST_ORDER);
    function findType(cardType) {
      return customCards[cardType] || cardTypes[cardType];
    }
    function getAllCardTypes() {
      return testOrder.map(function(cardType) {
        return clone_1.clone(findType(cardType));
      });
    }
    function getCardPosition(name, ignoreErrorForNotExisting) {
      if (ignoreErrorForNotExisting === void 0) {
        ignoreErrorForNotExisting = false;
      }
      var position = testOrder.indexOf(name);
      if (!ignoreErrorForNotExisting && position === -1) {
        throw new Error('"' + name + '" is not a supported card type.');
      }
      return position;
    }
    function creditCardType2(cardNumber) {
      var results = [];
      if (!is_valid_input_type_1.isValidInputType(cardNumber)) {
        return results;
      }
      if (cardNumber.length === 0) {
        return getAllCardTypes();
      }
      testOrder.forEach(function(cardType) {
        var cardConfiguration = findType(cardType);
        add_matching_cards_to_results_1.addMatchingCardsToResults(cardNumber, cardConfiguration, results);
      });
      var bestMatch = find_best_match_1.findBestMatch(results);
      if (bestMatch) {
        return [bestMatch];
      }
      return results;
    }
    creditCardType2.getTypeInfo = function(cardType) {
      return clone_1.clone(findType(cardType));
    };
    creditCardType2.removeCard = function(name) {
      var position = getCardPosition(name);
      testOrder.splice(position, 1);
    };
    creditCardType2.addCard = function(config) {
      var existingCardPosition = getCardPosition(config.type, true);
      customCards[config.type] = config;
      if (existingCardPosition === -1) {
        testOrder.push(config.type);
      }
    };
    creditCardType2.updateCard = function(cardType, updates) {
      var originalObject = customCards[cardType] || cardTypes[cardType];
      if (!originalObject) {
        throw new Error('"' + cardType + "\" is not a recognized type. Use `addCard` instead.'");
      }
      if (updates.type && originalObject.type !== updates.type) {
        throw new Error("Cannot overwrite type parameter.");
      }
      var clonedCard = clone_1.clone(originalObject);
      clonedCard = __assign(__assign({}, clonedCard), updates);
      customCards[clonedCard.type] = clonedCard;
    };
    creditCardType2.changeOrder = function(name, position) {
      var currentPosition = getCardPosition(name);
      testOrder.splice(currentPosition, 1);
      testOrder.splice(position, 0, name);
    };
    creditCardType2.resetModifications = function() {
      testOrder = clone_1.clone(ORIGINAL_TEST_ORDER);
      customCards = {};
    };
    creditCardType2.types = cardNames;
    module.exports = creditCardType2;
  }
});

// node_modules/luhn/src/luhn.js
var require_luhn = __commonJS({
  "node_modules/luhn/src/luhn.js"(exports, module) {
    "use strict";
    module.exports = /* @__PURE__ */ (function() {
      function validate(cardNumber) {
        var trimmed = String(cardNumber).replace(/[\s]/g, ""), length = trimmed.length, odd = false, total = 0, calc, calc2;
        if (!/^[0-9]+$/.test(trimmed)) {
          return false;
        }
        for (var i = length; i > 0; i--) {
          calc = parseInt(trimmed.charAt(i - 1));
          if (!odd) {
            total += calc;
          } else {
            calc2 = calc * 2;
            switch (calc2) {
              case 10:
                calc2 = 1;
                break;
              case 12:
                calc2 = 3;
                break;
              case 14:
                calc2 = 5;
                break;
              case 16:
                calc2 = 7;
                break;
              case 18:
                calc2 = 9;
                break;
              default:
                calc2 = calc2;
            }
            total += calc2;
          }
          odd = !odd;
        }
        return total !== 0 && total % 10 === 0;
      }
      return {
        validate
      };
    })();
  }
});

// components/index.tsx
import { Fragment as Fragment2 } from "react";

// components/styles.tsx
import styled from "styled-components";
var Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
var RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 1rem;
    flex-wrap: wrap;
`;

// components/index.tsx
import _22 from "lodash";

// components/types/index.tsx
var types_exports2 = {};
__export(types_exports2, {
  Avatar: () => Avatar,
  Badge: () => Badge,
  Block: () => Block,
  Button: () => Button,
  Chart: () => Chart,
  CreditCard: () => CreditCard,
  Form: () => Form,
  InputDateTime: () => InputDateTime,
  InputFile: () => InputFile,
  InputLabel: () => InputLabel,
  InputSelect: () => InputSelect,
  InputText: () => InputText,
  InputTextarea: () => InputTextarea,
  LoadingApp: () => LoadingApp,
  LoadingBar: () => LoadingBar,
  Logo: () => Logo,
  Lottie: () => Lottie,
  Modal: () => Modal2,
  Paginate: () => Paginate,
  Table: () => Table
});

// components/types/table/index.tsx
import { useEffect as useEffect5 } from "react";

// components/types/table/styles.tsx
import styled2 from "styled-components";
var Container2 = styled2.div`
    .iz-table-container {
        overflow-x: auto;

        &::-webkit-scrollbar {
            width: 0;
            height: ${(props) => props.notFound ? "0px" : "5px"};
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgb(255, 255, 255, 0.1);
            border-radius: 5px;
        }

        table {
            font-size: .8rem;
            border: 0;
            color: ${({ theme }) => theme.t6};
            overflow-x: ${(props) => props.notFound ? "auto" : "hidden"};
            width: 100%;
            border-spacing: 0;

            .iz-table-content {
                background: ${({ theme }) => theme.t05};
                height: 2.7rem;
                padding: 0.8rem 1.3rem;
                margin-top: 0.5rem;
                white-space: nowrap;
                display: flex;
                align-items: center;
                position: relative;
                transition: ease 0.3s;

                &.iz-table-identifier {
                    padding: .8rem .5rem !important;
                }

                &.iz-table-action {
                    display: flex;
                    justify-content: flex-end;
                    padding: .8rem .5rem !important;
                    position: relative;

                    &.left {
                        justify-content: flex-start;
                    }

                    &.center {
                        justify-content: center;
                    }

                    .iz-table-actions {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        gap: .5rem;
                    }

                    .iz-table-button {
                        min-width: 1.8rem;
                        height: 1.8rem;
                        border-radius: 5px;
                        border: 1px solid ${({ theme }) => theme.t05};
                        background: ${({ theme }) => theme.t05};
                        color: ${({ theme }) => theme.t6};
                        cursor: pointer;
                        transition: ease 0.3s, width 1s, position 0s;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: .5rem;
                        font-weight: 500;
                        text-transform: lowercase;
                        padding: 0 .5rem;
                        position: relative;

                        &:disabled {
                            pointer-events: none;
                            opacity: .6;
                        }

                        &:hover {
                            opacity: .9;

                            &.negative {
                                color: ${({ theme }) => theme.primary};
                                background: ${({ theme }) => theme.negative};
                            }
                        }
                    }
                }
            }

            thead {
                tr {
                    th {
                        border: none;
                        padding: 0;
                        text-transform: uppercase;
                        font-weight: 500;
                        letter-spacing: 2px;
                        position: relative;
                        height: 2.5rem;

                        @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                            .iz-table-content {
                                font-size: .7rem;
                            }
                        }

                        @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                            display: none;

                            &:nth-child(1), &:nth-child(2), &:last-child {
                                display: table-cell;
                            }
                        }

                        &:first-child {
                            .iz-table-content {
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            }
                        }

                        &:last-child {
                            .iz-table-content {
                                border-top-right-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }
                    }
                }
            }

            tbody {
                tr {
                    &:hover {
                        td {
                            .iz-table-content {
                                background: ${({ theme }) => theme.tertiary};
                            }
                        }
                    }

                    td {
                        border: none;
                        padding: 0;
                        font-weight: 400;
                        position: relative;

                        @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                            display: none;

                            &:nth-child(1), &:nth-child(2), &:last-child {
                                display: table-cell;
                            }
                        }

                        &:first-child {
                            .iz-table-content {
                                border-top-left-radius: 5px;
                                border-bottom-left-radius: 5px;
                            }
                        }

                        &:last-child {
                            .iz-table-content {
                                border-top-right-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }
                        }

                        .iz-table-content-elipse {
                            position: absolute;
                            left: 0;
                            right: 0;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            padding: 0.8rem 1.3rem;
                        }
                    }

                    &:first-child {
                        td {
                            .iz-table-content {
                                margin-top: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }

    .iz-table-icon {
        width: 1.8rem;
        height: 1.8rem;
        background: ${({ theme }) => theme.t08};
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        i {
            font-size: .9rem;
        }
    }
    
    .iz-table-not-found {
        border-radius: 5px;
        background: ${({ theme }) => theme.t05};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1.5rem 0;
        padding: 2.5rem;
        width: 100%;

        p {
            color: ${({ theme }) => theme.t6};
            text-align: center;
        }

        p:first-child {
            font-size: 1.3rem;
            font-weight: 600;
            margin-top: 0;
            margin-bottom: 0.5rem;

            @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                font-size: 1rem;
            }
        }

        p:last-child {
            font-size: 0.8rem;
            max-width: 50rem;
            margin-top: 0;
            margin-bottom: 0;

            @media (max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                font-size: 0.7rem;
            }
        }
    }
`;

// components/types/loading/bar/styles.tsx
import styled3 from "styled-components";
var Container3 = styled3.div`
  border-radius: ${(props) => props.borderRadius || "10px"};
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};
  animation: loading infinite 2s;
  margin: ${(props) => props.margin || "0px"};

  @keyframes loading {
    0% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
    50% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.10)" : "rgb(255, 255, 255, 0.15)"};
    }
    100% {
      background: ${(props) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
  }
`;

// components/types/loading/bar/index.tsx
import { jsx } from "react/jsx-runtime";
function LoadingBar(props) {
  return /* @__PURE__ */ jsx(Container3, { ...props });
}

// components/types/table/paginate/styles.tsx
import styled4 from "styled-components";
var Container4 = styled4.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;

    .paginate {
        font-size: .8rem;
        font-weight: 500;
        height: 1.5rem;
        padding: 0 .6rem;
        border-radius: 1rem;
        transition: ease .3s;
        color: ${({ theme }) => theme.t6};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &[data-current="true"] {
            background: ${({ theme }) => theme.tertiary};
            color: ${({ theme }) => theme.secondary};

            &:hover {
                background: ${({ theme }) => theme.tertiary};
            }
        }

        &:hover {
            background: ${({ theme }) => theme.t05};
        }
    }
`;

// components/types/table/paginate/index.tsx
import _ from "lodash";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Paginate(props) {
  const pages = () => {
    const offset = Number(props.page.value) - 4;
    let page = offset > 0 ? offset + 1 : 1;
    let pages2 = [];
    while (Number(props.total) >= page) {
      pages2.push(page);
      page++;
    }
    pages2 = _.slice(pages2, 0, 5);
    if (Number(props.page.value) + 1 > 5) pages2 = _.concat(["1.."], pages2);
    if (Number(props.total) > 6 && Number(props.page.value) + 1 < Number(props.total)) return _.concat(pages2, `..${props.total}`);
    return pages2;
  };
  return Number(props.total) > 1 && /* @__PURE__ */ jsxs(Container4, { children: [
    /* @__PURE__ */ jsx2(
      "div",
      {
        className: "paginate back",
        onClick: () => props.page.set ? props.page.set(
          props.page.value ? props.page.value - 1 : props.page.value
        ) : null,
        children: /* @__PURE__ */ jsx2("i", { "aria-hidden": true, className: "fa-solid fa-chevron-left" })
      }
    ),
    _.map(
      pages(),
      (page, index) => /* @__PURE__ */ jsx2(
        "div",
        {
          className: "paginate page",
          "data-current": String(props.page.value === Number(_.replace(page, /\D/g, "")) - 1),
          onClick: () => props.page.set ? props.page.set(Number(_.replace(page, /\D/g, "")) - 1) : null,
          children: page
        },
        index
      )
    ),
    /* @__PURE__ */ jsx2(
      "div",
      {
        className: "paginate next",
        onClick: () => props.page.set ? props.page.set(
          props.page.value !== props.total - 1 ? props.page.value + 1 : props.page.value
        ) : null,
        children: /* @__PURE__ */ jsx2("i", { "aria-hidden": true, className: "fa-solid fa-chevron-right" })
      }
    )
  ] });
}

// contexts/icon/index.tsx
import { createContext as createContext2, useContext as useContext2, useEffect as useEffect2, useState as useState3 } from "react";

// contexts/theme/index.tsx
import { createContext, useContext, useEffect, useState as useState2 } from "react";
import { ThemeProvider } from "styled-components";

// contexts/theme/styles.tsx
import styled5 from "styled-components";
var Switcher = styled5.div`
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    border: 2px solid ${({ theme }) => theme.t05};
    overflow: hidden;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    i {
        color: ${({ theme }) => theme.t6};
        position: absolute;
        transform: translateY(-50%);
        font-size: .9rem;
        z-index: 0;
        transition: ease .8s;

        &:first-child {
            left: .2rem;
            top: 50%;
            opacity: ${(props) => props["data-theme"] === "light" ? 0 : 1};
        }

        &:last-child {
            right: .2rem;
            top: 50%;
            opacity: ${(props) => props["data-theme"] === "light" ? 1 : 0};
        }
    }
    
    .switcher {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        position: relative;
        transition: ease .3s;
        transform: ${(props) => props["data-theme"] === "light" ? "transform: translateX(.2rem)" : "translateX(1.6rem)"};
        z-index: 1;

        div {
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.primary};
            border-radius: 1rem;
            position: relative;
            z-index: 2;
        }

        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transform: scale(1.8);
            background: ${({ theme }) => theme.t05};
            top: 0;
            left: 0;
            z-index: 1;
        }

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            transform: scale(3);
            background: ${({ theme }) => theme.t05};
            top: 0;
            left: 0;
            z-index: 0;
        }
    }
`;

// contexts/theme/content.tsx
var CommonTheme = {
  secondary: "#5869da",
  tertiary: "#629dfd33",
  positive: "#65c965",
  negative: "#FF334E",
  mobileMaxWidth: "650px",
  mobileMinWidth: "315px"
};
var Themes = {
  light: {
    primary: "#ffffff",
    reverse: "#353535",
    tooltip: "#f2f2f2",
    t8: "#000000cc",
    t7: "#000000b3",
    t6: "#00000099",
    t5: "#00000080",
    t4: "#00000066",
    t3: "#0000004d",
    t2: "#00000033",
    t1: "#0000001a",
    t08: "#00000014",
    t05: "#0000000d",
    t03: "#00000007",
    t02: "#00000005",
    t01: "#00000002",
    lgrad: `linear-gradient(
            to right, 
            #dadef7 0%, 
            #dee2f8 5%, 
            #e2e5f9 10%, 
            #e6e9fa 20%, 
            #eaedfb 30%, 
            #eff0fb 60%, 
            #f3f4fc 80%, 
            #f7f8fd 90%, 
            #fbfbfe 100%
        )`,
    maingrad: "linear-gradient(330deg, #b9c0ff7a 0%, #ffffff 100%)",
    ...CommonTheme
  },
  dark: {
    primary: "#333333",
    reverse: "#b45252",
    tooltip: "#3d3d3d",
    t8: "#ffffffcc",
    t7: "#ffffffb3",
    t6: "#ffffff99",
    t5: "#ffffff80",
    t4: "#ffffff66",
    t3: "#ffffff4d",
    t2: "#ffffff33",
    t1: "#ffffff1a",
    t08: "#ffffff14",
    t05: "#ffffff0d",
    t03: "#ffffff07",
    t02: "#ffffff05",
    t01: "#ffffff02",
    lgrad: `linear-gradient(
            to right, 
            #3d485c 0%, 
            #3c4657 5%, 
            #3b4353 10%, 
            #3a414e 20%, 
            #393f4a 30%, 
            #373c45 60%, 
            #363a41 80%, 
            #35383c 90%, 
            #343538 100%
        )`,
    maingrad: "linear-gradient(330deg, #1d1e27 0%, #333333 100%)",
    ...CommonTheme
  }
};

// tools/registry/index.tsx
import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// tools/registry/index.tsx
import { Fragment, jsx as jsx3 } from "react/jsx-runtime";
function StyledComponentsRegistry({ children }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return /* @__PURE__ */ jsx3(Fragment, { children: styles });
  });
  const menager = (sheet) => {
    return /* @__PURE__ */ jsx3(
      StyleSheetManager,
      {
        sheet,
        enableVendorPrefixes: true,
        shouldForwardProp: (propName, elementToBeRendered) => {
          return typeof elementToBeRendered === "string" ? isPropValid(propName) && !["height", "width"].includes(propName) : true;
        },
        children
      }
    );
  };
  if (typeof window !== "undefined") return menager();
  return menager(styledComponentsStyleSheet.instance);
}

// tools/utils/moment/index.tsx
import moment from "moment-timezone";
moment.tz(process.env.NEXT_PUBLIC_TIMEZONE || "");
var Moment = (...args) => {
  return moment(...args);
};
var moment_default = Moment;

// tools/utils/format/index.tsx
import _2 from "lodash";
var Format = {
  stringLimit(value, limit) {
    if (!value) return "";
    if (value.length <= limit) return value;
    if (!_2.isString(value)) return "";
    return value.substring(0, limit) + "...";
  },
  address(data) {
    if (!data) return "";
    return `${data.city} - ${data.state} / ${data.address}`;
  },
  match(value) {
    if (!value) return "";
    if (Number(value.replace(/\D/g, ""))) return String(value);
    if (typeof value !== "string") {
      return _2.map(value, (data) => data.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase());
    }
    return value.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase();
  },
  money: (value, notSign) => {
    const locale = "pt-br";
    value = parseFloat(value);
    if (!notSign) {
      return new Intl.NumberFormat(locale, { style: "currency", currency: "BRL" }).format(value);
    }
    return new Intl.NumberFormat(locale, { minimumFractionDigits: 2 }).format(value);
  }
};
var format_default = Format;

// tools/utils/mask/index.tsx
import _3 from "lodash";
var Mask = {
  docNumber: (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    if (value.length <= 11) {
      return value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
    }
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1/$2").replace(/(\d{4})(\d{1,2})/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
  },
  phone: (value) => {
    if (!value) return "";
    if (value.length === 14 || value.length === 10) {
      return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2").replace(/(-\d{4})(\d+?$)/, "$1");
    }
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").replace(/(-\d{4})\d+?$/, "$1");
  },
  kilo: (value) => {
    if (!value) return "";
    value = value.replace(/\D\./g, "");
    if (_3.includes(value, ".")) {
      const [left, right] = _3.split(value, ".");
      value = `${_3.replace(left, /\D/g, "").substring(0, 3)}.${_3.replace(right, /\D/g, "").substring(0, 2)}`;
    }
    return value;
  },
  money(valor, nosign, integer) {
    valor = valor + "";
    valor = parseInt(valor.replace(/[\D]+/g, ""));
    if (!nosign) valor = "R$ " + valor;
    if (!integer) {
      if (!nosign ? valor.length <= 4 : valor.length <= 1) {
        valor = valor.replace(/([0-9]{1})$/g, "00$1");
      }
      if (!nosign ? valor.length <= 5 : valor.length <= 2) {
        valor = valor.replace(/([0-9]{2})$/g, "0$1");
      }
      if (!nosign ? valor.length > 5 : valor.length > 2) {
        valor = valor.replace(/([0-9]{2})$/g, ",$1");
      }
      if (!nosign ? valor.length > 9 : valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
      }
      if (!nosign ? valor.length > 13 : valor.length > 10) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");
      }
      if (!nosign ? valor.length > 17 : valor.length > 14) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4");
      }
    } else {
      if (!nosign ? valor.length > 6 : valor.length > 3) {
        valor = valor.replace(/([0-9]{3}$)/g, ".$1");
      }
      if (!nosign ? valor.length > 10 : valor.length > 7) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}$)/g, ".$1.$2");
      }
      if (!nosign ? valor.length > 14 : valor.length > 11) {
        valor = valor.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}$)/g, ".$1.$2.$3");
      }
    }
    if (valor === "R$ NaN") return "";
    if (valor === "R$ 0,00") return "";
    return valor.substring(0, 20);
  },
  number: (value) => {
    if (!value) return "";
    return value.replace(/\D/g, "");
  },
  loop: (value = "", options) => {
    const {
      sequencyNumber = 1,
      maxSequency = 1,
      placeholder = "",
      separator = " ",
      regex = `[^0-9${separator}]`
    } = options || {};
    const sequency = _3.repeat(placeholder, sequencyNumber);
    const mask = _3.trim(_3.repeat(sequency + separator, maxSequency), separator);
    const length = sequencyNumber * maxSequency;
    const maxLength = separator ? length + (maxSequency - 1) : length;
    const customRegex = new RegExp(regex, "g");
    const sequencyRegex = new RegExp(`(.{${sequencyNumber}})`, "g");
    const separatorRegex = new RegExp(separator, "g");
    value = value.replace(customRegex, "");
    value = value.replace(separatorRegex, "");
    value = value.replace(sequencyRegex, "$1" + separator);
    const placeholderMask = placeholder ? mask.substring(value.length, maxLength) : "";
    return _3.trim(
      (value + placeholderMask).substring(0, maxLength),
      separator
    );
  }
};
var mask_default = Mask;

// tools/utils/remove-mask/index.tsx
var RemoveMask = {
  phone: (value) => {
    if (!value) return "";
    return value.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");
  },
  docNumber: (value) => {
    if (!value) return "";
    return value.replace(/\./g, "").replace("/", "").replace("-", "");
  },
  percent: (value) => {
    if (!value) return "";
    return value.replace(",", ".").replace("%", "");
  },
  money: (value) => {
    if (!value) return "";
    return value.replace("R$", "").replace(/\./g, "").replace(",", ".");
  },
  number: (value) => {
    if (!value) return "";
    return value.replace(/\D/g, "");
  }
};
var remove_mask_default = RemoveMask;

// tools/utils/index.tsx
var Utils = class {
};
Utils.moment = moment_default;
Utils.format = format_default;
Utils.mask = mask_default;
Utils.removeMask = remove_mask_default;

// tools/storage/index.tsx
import { cookies } from "next/headers";
async function getStorage(key = "") {
  var _a;
  return (_a = cookies().get(key)) == null ? void 0 : _a.value;
}
async function setStorage(key = "", value = "") {
  cookies().set(key, value);
}

// contexts/theme/index.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var ThemeContext = createContext({});
var ThemeProviderContainer = (props) => {
  const [theme, setTheme] = useState2("light");
  const [defaultTheme] = useState2("light");
  useEffect(() => {
    if (!theme) return;
    (async () => await setStorage(process.env.NEXT_PUBLIC_STORAGE_THEME, theme))();
  }, [theme]);
  const SwitcherComponent = () => {
    return /* @__PURE__ */ jsxs2(
      Switcher,
      {
        onClick: () => setTheme(theme === "light" ? "dark" : "light"),
        "data-theme": theme || defaultTheme,
        children: [
          /* @__PURE__ */ jsx4("i", { "aria-hidden": true, className: "fa-solid fa-moon" }),
          /* @__PURE__ */ jsx4("div", { className: "switcher", children: /* @__PURE__ */ jsx4("div", {}) }),
          /* @__PURE__ */ jsx4("i", { "aria-hidden": true, className: "fa-solid fa-sun" })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsx4(
    ThemeContext.Provider,
    {
      value: {
        theme: props.theme || defaultTheme,
        setTheme,
        content: Themes[props.theme || defaultTheme],
        Switcher: SwitcherComponent
      },
      children: /* @__PURE__ */ jsx4(ThemeProvider, { theme: Themes[props.theme || defaultTheme], children: props.children })
    }
  );
};
var useTheme = () => useContext(ThemeContext);

// contexts/icon/index.tsx
import _4 from "lodash";

// contexts/icon/assets/brands/index.tsx
var req = __require.context("./", false, /\.svg$/);
var brands = {};
req.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  brands[name] = req(key).default;
});
var brands_default = brands;

// contexts/icon/assets/regular/index.tsx
var req2 = __require.context("./", false, /\.svg$/);
var regular = {};
req2.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  regular[name] = req2(key).default;
});
var regular_default = regular;

// contexts/icon/assets/solid/index.tsx
var req3 = __require.context("./", false, /\.svg$/);
var solid = {};
req3.keys().forEach((key) => {
  const name = key.replace("./", "").replace(".svg", "");
  solid[name] = req3(key).default;
});
var solid_default = solid;

// contexts/icon/assets/index.tsx
var assets_default = {
  brands: brands_default,
  regular: regular_default,
  solid: solid_default
};

// contexts/icon/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var IconContext = createContext2({});
var IconProviderContainer = ({ children }) => {
  const { content } = useTheme();
  const [isClient, setIsClient] = useState3(false);
  const [matches, setMatches] = useState3(0);
  useEffect2(() => {
    setIsClient(true);
  }, []);
  useEffect2(() => {
    const firstMediaQuery = window.matchMedia(`(max-width: ${content.mobileMaxWidth})`);
    const secoundMediaQuery = window.matchMedia(`(max-width: ${content.mobileMinWidth})`);
    const firstHandler = (event) => setMatches(event.matches ? 1 : 0);
    const secoundHandler = (event) => setMatches(event.matches ? 2 : 1);
    if (firstMediaQuery.matches) setMatches(1);
    if (secoundMediaQuery.matches) setMatches(2);
    firstMediaQuery.addEventListener("change", firstHandler);
    secoundMediaQuery.addEventListener("change", secoundHandler);
    return () => {
      firstMediaQuery.removeEventListener("change", firstHandler);
      secoundMediaQuery.removeEventListener("change", secoundHandler);
    };
  }, []);
  useEffect2(() => {
    if (!isClient) return;
    const processElement = (element) => {
      var _a, _b, _c, _d, _e;
      const name = element.getAttribute("class");
      if (!name) return;
      const icon = _4.split(_4.replace(name, /fa-/g, ""), " ");
      if (!icon.length) return;
      let svg = (_d = (_c = (_a = assets_default[icon[0]]) == null ? void 0 : _a[icon[1]]) != null ? _c : (_b = assets_default["solid"]) == null ? void 0 : _b[icon[0]]) != null ? _d : "";
      if (!svg) return;
      svg = svg.replace(/fill=".*?"/g, 'fill="currentColor"');
      const styles = window.getComputedStyle(element);
      const size = Number((_e = _4.split(styles.fontSize, "px")) == null ? void 0 : _e[0]) + 2;
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.textContent = "";
      element.innerHTML = svg;
    };
    document.querySelectorAll("i").forEach((el) => processElement(el));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node;
            if (el.tagName.toLowerCase() === "i") processElement(el);
            el.querySelectorAll("i").forEach((child) => processElement(child));
          }
        });
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, [isClient, matches]);
  return /* @__PURE__ */ jsx5(IconContext.Provider, { value: {}, children });
};
var useIcon = () => useContext2(IconContext);

// contexts/tooltip/index.tsx
import { createContext as createContext3, useContext as useContext3, useEffect as useEffect3, useState as useState4 } from "react";

// contexts/tooltip/styles.tsx
import styled6 from "styled-components";
var Tooltip = styled6.div`
    position: fixed;
    background: ${({ theme }) => theme.tooltip};
    color: ${({ theme }) => theme.t6};
    font-size: .8rem;
    font-weight: 500;
    text-align: center;
    padding: .3rem .8rem;
    border-radius: 5px;
    transform: translateX(-50%);
    z-index: 10;
    border: 1px solid ${({ theme }) => theme.t05};

    &::before {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${({ theme }) => theme.t05};
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${({ theme }) => theme.tooltip};
    }
`;

// contexts/tooltip/index.tsx
import _5 from "lodash";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var TooltipContext = createContext3({});
var TooltipProviderContainer = ({ children }) => {
  const [tooltips, setTooltips] = useState4([]);
  const getContent = (target) => {
    var _a;
    const rect = target.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY - (target.offsetHeight + 8),
      left: rect.left + window.scrollX + target.offsetWidth / 2,
      content: ((_a = target.dataset) == null ? void 0 : _a.tooltip) || ""
    };
  };
  useEffect3(() => {
    const processElement = (element) => {
      element.addEventListener("mouseenter", (event) => {
        const target = event == null ? void 0 : event.target;
        if (!target) return;
        setTooltips(_5.concat(tooltips, [getContent(target)]));
      });
      element.addEventListener("mouseleave", (event) => {
        const target = event == null ? void 0 : event.target;
        if (!target) return;
        setTooltips(_5.filter(tooltips, (data) => JSON.stringify(data) === JSON.stringify(getContent(target))));
      });
    };
    document.querySelectorAll("[data-tooltip]").forEach((el) => processElement(el));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const el = node;
            if (el.getAttribute("data-tooltip")) processElement(el);
            el.querySelectorAll("[data-tooltip]").forEach((child) => processElement(child));
          }
        });
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs3(TooltipContext.Provider, { value: {}, children: [
    _5.map(
      tooltips,
      (data, index) => /* @__PURE__ */ jsx6(
        Tooltip,
        {
          style: {
            top: data.top,
            left: data.left
          },
          children: data.content
        },
        index
      )
    ),
    children
  ] });
};
var useTooltip = () => useContext3(TooltipContext);

// contexts/modal/index.tsx
import { createContext as createContext4, useContext as useContext4, useEffect as useEffect4, useState as useState5 } from "react";
import { usePathname } from "next/navigation";

// contexts/modal/styles.tsx
import styled7 from "styled-components";
var Container5 = styled7.div`
  
`;

// contexts/modal/index.tsx
import _6 from "lodash";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var ModalContext = createContext4({});
var memory = [];
var ModalProviderContainer = ({ children }) => {
  const pathname = usePathname();
  const [modals, setModals] = useState5([]);
  useEffect4(() => {
    setModals(_6.filter(memory, (modal) => modal.type === "fixed"));
  }, [pathname]);
  const add = (modal) => {
    if (_6.some(memory, (data) => data.name === modal.name)) return;
    memory.push(modal);
    setModals(memory);
  };
  const remove = (modalName) => {
    const index = _6.findIndex(memory, (data) => data.name === modalName);
    memory.slice(index, 1);
    setModals(memory);
  };
  const setProps = (modalName, props) => {
    const index = _6.findIndex(modals, (modal) => modal.name === modalName);
    const content = _6.find(modals, (modal) => modal.name === modalName);
    if (!content) return;
    let settedModals = [...modals];
    settedModals.splice(index, 1, { ...content, props: { ...content.props, ...props } });
    setModals(settedModals);
  };
  return /* @__PURE__ */ jsxs4(
    ModalContext.Provider,
    {
      value: {
        value: modals,
        add,
        remove,
        setProps
      },
      children: [
        /* @__PURE__ */ jsx7(Container5, { children: _6.map(modals, (modal, index) => {
          const ModalComponent = modal.component;
          return /* @__PURE__ */ jsx7(ModalComponent, { ...modal.props }, index);
        }) }),
        children
      ]
    }
  );
};
var useModal = () => useContext4(ModalContext);

// components/types/table/index.tsx
import _8 from "lodash";

// components/types/table/modal/styles.tsx
import styled8 from "styled-components";
var Content = styled8.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .iz-table-modal-title {
        font-size: 1.2rem;
        font-weight: 500;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.t6};
    }
    
    .iz-table-modal-content {
        ul {
            li {
                border-bottom: solid 1px ${({ theme }) => theme.t05};
                padding: .8rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                font-size: .8rem;
                color: ${({ theme }) => theme.t6};

                &:last-child {
                    border-bottom: none;
                }
                
                .iz-table-modal-column {
                    background: ${({ theme }) => theme.t05};
                    padding: .5rem .8rem;
                    font-weight: 600;
                    border-radius: 5px;
                }
                
                .iz-table-modal-row {
                    text-align: right;
                }
            }
        }
    }
    
    .iz-table-modal-actions {
        margin-top: 1rem;
    }
`;

// components/types/table/modal/index.tsx
import _7 from "lodash";

// components/types/table/modal/actions.tsx
var actionConfig = {
  "fa-solid fa-pen-to-square": { label: "editar" },
  "fa-solid fa-trash-can": { label: "remover", color: CommonTheme.negative }
};
var actions_default = actionConfig;

// components/types/table/modal/index.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function Modal(props) {
  const modal = useModal();
  const content = _7.omit(props.content, ["actions"]);
  const actions = Object.values(_7.pick(props.content, ["actions"]))[0];
  const onClose = () => {
    modal.setProps("table", { toggle: false });
  };
  return /* @__PURE__ */ jsx8(
    Component,
    {
      content: [{
        type: "Modal",
        props: {
          toggle: props.toggle,
          onClose,
          children: /* @__PURE__ */ jsx8(Container2, { children: /* @__PURE__ */ jsxs5(Content, { children: [
            /* @__PURE__ */ jsx8("div", { className: "iz-table-modal-title", children: "Conte\xFAdo" }),
            /* @__PURE__ */ jsx8("div", { className: "iz-table-modal-content", children: /* @__PURE__ */ jsx8("ul", { children: _7.map(
              content,
              (value, key) => /* @__PURE__ */ jsxs5("li", { children: [
                !!key && /* @__PURE__ */ jsx8("div", { className: "iz-table-modal-column", children: key }),
                /* @__PURE__ */ jsx8("div", { className: "iz-table-modal-row", children: value })
              ] }, key)
            ) }) }),
            /* @__PURE__ */ jsx8("div", { className: "iz-table-modal-actions", children: /* @__PURE__ */ jsx8(
              Component,
              {
                content: _7.concat(_7.map(actions, (data) => ({
                  type: "Button",
                  props: {
                    ...actions_default[data.icon] || {},
                    onClick: data.function
                  }
                })), {
                  type: "Button",
                  props: {
                    label: "fechar",
                    outline: true,
                    onClick: onClose
                  }
                })
              }
            ) })
          ] }) })
        }
      }]
    }
  );
}

// components/types/table/index.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function Table(props) {
  var _a, _b, _c, _d, _e, _f;
  const theme = useTheme();
  const modal = useModal();
  const loading = ((_a = props.loading) == null ? void 0 : _a.is) || props.loading;
  useEffect5(() => {
    modal.add({ component: Modal, name: "table" });
    return () => modal.remove("table");
  }, []);
  const onShowLine = (key) => {
    if (window.innerWidth > Number(_8.replace(theme.content.mobileMaxWidth, "px", ""))) return;
    let content = {};
    _8.forEach(props.options, (data, index) => {
      var _a2, _b2;
      const column = ((_a2 = data.column) == null ? void 0 : _a2.name) || data.column;
      const columnName = !_8.isString(column) ? props.options.length - 1 === index ? "actions" : "" : column;
      content[columnName] = columnName === "actions" ? (_b2 = data.row) == null ? void 0 : _b2.actions : renderRowContainer(props.content[key], data);
    });
    modal.setProps("table", { toggle: true, content });
  };
  const renderRowContainer = (data, option) => {
    var _a2, _b2, _c2, _d2;
    return /* @__PURE__ */ jsx9(
      "div",
      {
        className: `
          iz-table-content 
          ${((_a2 = option.row) == null ? void 0 : _a2.actions) ? "iz-table-action" : ""} 
          ${((_b2 = option.row) == null ? void 0 : _b2.icon) ? "iz-table-identifier" : ""}
        `,
        style: _8.isFunction((_c2 = option.row) == null ? void 0 : _c2.style) ? option.row.style(data, option) : (_d2 = option.row) == null ? void 0 : _d2.style,
        children: renderRowContent(data, option)
      }
    );
  };
  const renderRowContent = (data, option) => {
    var _a2, _b2, _c2, _d2, _e2;
    if (!!((_a2 = option.row) == null ? void 0 : _a2.actions)) {
      return /* @__PURE__ */ jsx9("div", { className: "iz-table-actions", children: _8.map(
        (_b2 = option.row) == null ? void 0 : _b2.actions,
        (action, index) => renderButton(action, data, index)
      ) });
    }
    if ((_c2 = option.row) == null ? void 0 : _c2.icon) {
      return /* @__PURE__ */ jsx9("div", { className: "iz-table-icon", children: /* @__PURE__ */ jsx9(
        "i",
        {
          "aria-hidden": true,
          className: _8.isFunction((_d2 = option.row) == null ? void 0 : _d2.icon) ? option.row.icon(data) || "fa-solid fa-circle-user" : ((_e2 = option.row) == null ? void 0 : _e2.icon) || "fa-solid fa-circle-user"
        }
      ) });
    }
    return renderRowText(data, option);
  };
  const renderButton = (action, data, index) => {
    return /* @__PURE__ */ jsx9(
      "button",
      {
        className: `iz-table-button ${_8.includes(action.icon, "trash") ? "negative" : ""}`,
        onClick: () => action.function ? action.function(data) : null,
        disabled: action.disabled,
        "data-tooltip": action.tooltip,
        children: /* @__PURE__ */ jsx9("i", { "aria-hidden": true, className: action.icon || "fa-solid fa-eye" })
      },
      index
    );
  };
  const renderRowText = (data, option) => {
    const row = option.row || {};
    const content = data[row.name] || data;
    let body;
    while (!body) {
      if (_8.isString(row)) body = data[row];
      if (_8.isString(content)) body = content;
      if (_8.isFunction(row.mask)) body = row.mask(content);
      if (_8.isFunction(row.custom)) body = row.custom(content);
      body = body != null ? body : "---";
    }
    return /* @__PURE__ */ jsx9(
      "div",
      {
        className: "iz-table-content-elipse",
        title: _8.isString(body) ? body : "",
        children: body
      }
    );
  };
  return /* @__PURE__ */ jsxs6(Container2, { notFound: !((_b = props.content) == null ? void 0 : _b.length) && !props.loading, children: [
    /* @__PURE__ */ jsx9("div", { className: "iz-table-container", children: /* @__PURE__ */ jsxs6("table", { children: [
      /* @__PURE__ */ jsx9("thead", { children: /* @__PURE__ */ jsx9("tr", { children: _8.map(
        props.options,
        (option, index) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i;
          return /* @__PURE__ */ jsx9("th", { style: (_a2 = option.column) == null ? void 0 : _a2.style, children: /* @__PURE__ */ jsx9(
            "div",
            {
              className: `iz-table-content ${((_b2 = option.column) == null ? void 0 : _b2.action) ? `iz-table-action ${((_d2 = (_c2 = option.column) == null ? void 0 : _c2.action) == null ? void 0 : _d2.position) ? (_f2 = (_e2 = option.column) == null ? void 0 : _e2.action) == null ? void 0 : _f2.position : ""}` : ""}`,
              children: !!((_g = option.column) == null ? void 0 : _g.action) ? renderButton(option.column.action) : _8.isString(((_h = option.column) == null ? void 0 : _h.name) || option.column) ? ((_i = option.column) == null ? void 0 : _i.name) || option.column : ""
            }
          ) }, index);
        }
      ) }) }),
      /* @__PURE__ */ jsx9("tbody", { children: loading ? _8.map(((_c = props.loading) == null ? void 0 : _c.items) || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (data, key) => /* @__PURE__ */ jsx9("tr", { children: _8.map(props.options, (data2, index) => {
        var _a2;
        return /* @__PURE__ */ jsx9("td", { children: /* @__PURE__ */ jsx9(
          LoadingBar,
          {
            height: "2.5rem",
            borderRadius: index === 0 ? "5px 0 0 5px" : ((_a2 = props.options) == null ? void 0 : _a2.length) - 1 === index ? "0 5px 5px 0" : "0",
            margin: key === 0 ? "1.5rem 0 0" : ".5rem 0 0"
          }
        ) }, index);
      }) }, key)) : _8.map(props.content, (data, key) => /* @__PURE__ */ jsx9("tr", { children: _8.map(props.options, (option, index) => /* @__PURE__ */ jsx9("td", { onClick: () => index < 2 ? onShowLine(key) : null, children: renderRowContainer(data, option) }, index)) }, key)) })
    ] }) }),
    !((_d = props.content) == null ? void 0 : _d.length) && !props.loading && /* @__PURE__ */ jsxs6("div", { className: "iz-table-not-found", children: [
      /* @__PURE__ */ jsx9("p", { children: ((_e = props.notFound) == null ? void 0 : _e.title) || "Nenhuma campanha encontrado" }),
      /* @__PURE__ */ jsx9("p", { children: ((_f = props.notFound) == null ? void 0 : _f.message) || "Envie uma campanha de marketing para aparecer algum registro" })
    ] }),
    !!props.paginate && /* @__PURE__ */ jsx9(Paginate, { ...props.paginate })
  ] });
}

// components/types/loading/app/styles.tsx
import styled9 from "styled-components";
var Container6 = styled9.div`
    width: ${({ initialization }) => initialization ? "100vw" : "100%"};
    height: ${({ initialization }) => initialization ? "100vh" : "calc(100vh - 15rem)"};
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${({ initialization }) => initialization ? "absolute" : "relative"};;
    bottom: 0;
    left: 0;
    background: ${({ initialization, theme }) => initialization ? `${theme.maingrad}, ${theme.primary}` : "transparent"};
    z-index: ${({ initialization }) => initialization ? "9" : "0"};
    
    .iz-loading-logo {
        font-size: 4rem;
        opacity: 40%;
        animation: loop 2s infinite;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            width: 5rem;
            height: 5rem;
            animation: firstImpact 2s .5s infinite ease;
            background: ${({ theme }) => theme.t05};
            border-radius: 50%;
            z-index: 0;
            opacity: 0;
        }

        &::after {
            content: "";
            position: absolute;
            width: 5rem;
            height: 5rem;
            animation: secondImpact 2s .5s infinite ease;
            background: ${({ theme }) => theme.t05};
            border-radius: 50%;
            z-index: 0;
            opacity: 0;
        }

        @keyframes loop {
            0% {
                transform: scale(1);
            }
            80% {
                transform: scale(1.3);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes firstImpact {
            0% {
                transform: scale(1);
                opacity: 0;
            }
            10% {
                transform: scale(1.6);
                opacity: 1;
            }
            100% {
                transform: scale(1.6);
                opacity: 0;
            }
        }

        @keyframes secondImpact {
            0% {
                transform: scale(1);
                opacity: 0;
            }
            40% {
                transform: scale(1.3);
                opacity: 1;
            }
            100% {
                transform: scale(1.3);
                opacity: 0;
            }
        }
    }
`;

// components/types/logo/styles.tsx
import styled10 from "styled-components";
var Container7 = styled10.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;
  font-size: ${(props) => props.size || "2"}rem;
  color: ${(props) => props.theme.t5};

  label:first-child {
    font-weight: 900;
    color: ${(props) => props.theme.secondary};
  }

  label:last-child {
    font-weight: 600;
  }
`;

// components/types/logo/index.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
function Logo(props) {
  return /* @__PURE__ */ jsxs7(Container7, { ...props, children: [
    /* @__PURE__ */ jsx10("label", { children: "IZ" }),
    !props.onlyPrefix && /* @__PURE__ */ jsx10("label", { children: "Way" })
  ] });
}

// components/types/loading/app/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function LoadingApp(props) {
  return /* @__PURE__ */ jsx11(Container6, { ...props, children: /* @__PURE__ */ jsx11(Logo, { className: "iz-loading-logo", onlyPrefix: true }) });
}

// components/types/modal/styles.tsx
import styled11 from "styled-components";
var Container8 = styled11.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex !important;
  position: fixed;
  z-index: ${(props) => props.toggle ? "9" : "-1"};
  flex-direction: ${(props) => props.position === "left" ? "row-reverse" : "row"} !important;
  transform: ${(props) => props.toggle ? "translateX(0%)" : "translateX(100%)"};
  transition: ${(props) => props.toggle ? ".0s ease .0s" : ".3s ease .3s"};

  .iz-modal-back {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.3);
    opacity: ${(props) => props.toggle ? "1" : "0"};
    transition: ease 0.3s;
    position: absolute;
  }

  .iz-modal-container {
    display: flex;
    flex-direction: column;
    height: ${(props) => props.position !== "center" ? "100%" : void 0};
    width: ${(props) => props.position !== "center" ? "18rem" : void 0};
    border-radius: ${(props) => props.position === "center" ? "10px" : void 0};
    max-height: ${(props) => props.position === "center" ? "95%" : "100%"};
    max-width: ${(props) => props.position === "center" ? "95%" : "100%"};
    background: ${({ theme }) => theme.primary};
    transform: ${(props) => props.toggle ? props.position === "right" || props.position === "left" ? "translateX(0rem)" : "translateX(-50%) translateY(50%)" : props.position === "right" ? "translateX(18rem)" : props.position === "left" ? "translateX(-18rem)" : "translateX(-50%) translateY(43%)"};
    opacity: ${(props) => props.position === "center" && !props.toggle ? "0" : "1"};
    transition: ease 0.3s;
    position: absolute;

    ${(props) => props.position === "right" ? "right: 0;" : props.position === "left" ? "left: 0;" : "left: 50%; bottom: 50%;"}

    @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
      border-radius: ${(props) => props.position === "center" ? "10px 10px 0 0" : void 0};
      width: ${(props) => props.position !== "center" ? "18rem" : "100%"};
      max-width: 100%;
      padding-bottom: 3rem !important;

      transform: ${(props) => props.toggle ? props.position === "right" || props.position === "left" ? "translateX(0rem)" : "translateX(-50%) translateY(0)" : props.position === "right" ? "translateX(18rem)" : props.position === "left" ? "translateX(-18rem)" : "translateX(-50%) translateY(50%)"};

      ${(props) => props.position === "right" ? "right: 0;" : props.position === "left" ? "left: 0;" : "left: 50%; bottom: 0;"}
    }

    .iz-modal-header {
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(0, 0, 0, 0.2);

      .iz-modal-title {
        color: ${({ theme }) => theme.t6};
        font-size: 1rem;
        font-weight: 500;

        i {
          margin-right: .5rem;
        }

        span {
          word-break: break-word;
        }
      }

      .fa-xmark {
        color: ${({ theme }) => theme.t6};
        margin-left: .5rem;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.t8};
        }
      }
    }

    .iz-modal-content {
      overflow-x: hidden;
      overflow-y: overlay;
      position: relative;
      height: ${(props) => props.position === "center" ? "initial" : "100%"};

      .iz-modal-close {
        position: absolute;
        color: ${(props) => props.light ? "rgb(255, 255, 255, 0.6)" : "rgb(0, 0, 0, 0.6)"};
        top: ${(props) => props.position === "center" ? "1rem" : "1.5rem"};
        right: ${(props) => props.position === "center" ? "1rem" : "1.5rem"};
        width: 1rem;
        height: 1rem;
        cursor: pointer;
        z-index: 9;
        display: flex;
        align-items: center;
        justify-content: center;
          
        @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
           display: none;
        }

        &:hover {
          color: ${(props) => props.light ? "rgb(255, 255, 255, 1)" : "rgb(0, 0, 0, 1)"};
        }
      }
    }

    .iz-modal-buttons {
      padding: 1rem 2rem;

      @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
        padding: 1rem 2rem 2rem;
      }

      button {
        width: 100%;
        margin-bottom: .5rem;
      }

      button:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

// components/types/modal/index.tsx
import _9 from "lodash";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
function Modal2(props) {
  var _a, _b, _c;
  return /* @__PURE__ */ jsxs8(Container8, { ...props, position: props.position || "center", children: [
    /* @__PURE__ */ jsx12("div", { className: "iz-modal-back", onClick: props.onClose }),
    /* @__PURE__ */ jsxs8("div", { className: "iz-modal-container", children: [
      (!!props.title || !!props.header) && /* @__PURE__ */ jsxs8("div", { className: "iz-modal-header", children: [
        /* @__PURE__ */ jsxs8("div", { className: "iz-modal-title", children: [
          ((_a = props.header) == null ? void 0 : _a.icon) && /* @__PURE__ */ jsx12("i", { "aria-hidden": true, className: (_b = props.header) == null ? void 0 : _b.icon }),
          /* @__PURE__ */ jsx12("span", { children: props.title || ((_c = props.header) == null ? void 0 : _c.title) })
        ] }),
        /* @__PURE__ */ jsx12("i", { "aria-hidden": true, className: "fa-solid fa-xmark", onClick: props.onClose })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: "iz-modal-content", children: [
        props.onClose && !props.title && !props.header && !props.noCloseIcon && /* @__PURE__ */ jsx12("div", { className: "iz-modal-close", onClick: props.onClose, children: /* @__PURE__ */ jsx12("i", { "aria-hidden": true, className: "fa-solid fa-xmark" }) }),
        props.children
      ] }),
      props.buttons && /* @__PURE__ */ jsx12("div", { className: "iz-modal-buttons", children: _9.map(
        props.buttons,
        (button, index) => /* @__PURE__ */ jsx12(Button, { ...button }, index)
      ) })
    ] })
  ] });
}

// components/types/badge/styles.tsx
import styled12 from "styled-components";
var Container9 = styled12.div`
  .content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1.8rem;
    padding: 0 2rem;
    position: relative;

    div {
      position: relative;
      z-index: 1;
      color: ${({ theme, color }) => theme[color]};
      font-size: .8rem;
      font-weight: 500;
      text-transform: capitalize;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: ${({ theme, color }) => theme[color]};
      opacity: .2;
    }
  }
`;

// components/types/badge/index.tsx
import _10 from "lodash";
import { jsx as jsx13 } from "react/jsx-runtime";
function Badge(props) {
  const { content } = useTheme();
  const status = {
    ATIVO: "positive",
    DESATIVADO: "negative",
    ESTAVEL: "positive",
    INSTAVEL: "negative",
    REGULAR: "negative"
  };
  return /* @__PURE__ */ jsx13(Container9, { color: status[props.value] || content.t3, children: /* @__PURE__ */ jsx13("div", { className: "content", children: /* @__PURE__ */ jsx13("div", { children: _10.lowerCase(props.value) }) }) });
}

// components/types/form/index.tsx
import React10, { useEffect as useEffect6, useRef as useRef2 } from "react";

// components/types/form/styles.tsx
import styled13 from "styled-components";
var Container10 = styled13.form`
    width: 100%;

    .form-buttons {
        width: 100%;
        padding-top: 1rem;

        button {
            width: 100%;
            margin-top: 1rem;
        }
    }
`;

// components/types/form/index.tsx
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import _16 from "lodash";

// components/types/form/types/index.tsx
var types_exports = {};
__export(types_exports, {
  Button: () => Button,
  InputDateTime: () => InputDateTime,
  InputFile: () => InputFile,
  InputLabel: () => InputLabel,
  InputSelect: () => InputSelect,
  InputText: () => InputText,
  InputTextarea: () => InputTextarea
});

// components/types/form/types/file/index.tsx
import { useRef } from "react";

// components/types/form/types/file/styles.tsx
import styled14 from "styled-components";
var Container11 = styled14.div`
    width: 100%;
    padding-top: .3rem;

    .iz-image-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;
        padding: .5rem 1rem;
        width: 100%;
        font-size: .8rem;
        background: ${(props) => props.disabled ? "${({ theme }) => theme.t2}" : "${({ theme }) => theme.primary}"};
        opacity: ${(props) => props.disabled ? ".7" : "1"};
        color: ${({ theme }) => theme.t6};
        cursor: pointer;
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;

// components/types/form/types/label/styles.tsx
import styled15 from "styled-components";
var Container12 = styled15.label`
    font-size: .8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.t6};
`;

// components/types/form/types/label/index.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function InputLabel(props) {
  return /* @__PURE__ */ jsx14(Container12, { className: props.className, children: props.children });
}

// components/types/form/types/file/index.tsx
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
function InputFile(props) {
  var _a;
  const inputRef = useRef({});
  const register = (props.register || ((name) => ({})))(props.name || "");
  const readImage = (data) => {
    if (props.onPreview) props.onPreview(URL.createObjectURL(data));
    if (props.onChange) props.onChange(data);
  };
  return /* @__PURE__ */ jsxs9(Container11, { className: props.className, error: props.error, disabled: props.disabled, children: [
    /* @__PURE__ */ jsx15(
      "input",
      {
        hidden: true,
        type: "file",
        id: "file",
        accept: "image/*",
        ref: inputRef,
        disabled: props.disabled,
        name: props.name,
        onFocus: () => {
          if (props.onFocus) props.onFocus(props.name);
        },
        ...register,
        onChange: (e) => {
          var _a2;
          register.onChange(e);
          readImage((_a2 = e.target.files) == null ? void 0 : _a2[0]);
        }
      }
    ),
    !!props.label && /* @__PURE__ */ jsxs9(InputLabel, { children: [
      props.label,
      props.required ? "*" : ""
    ] }),
    /* @__PURE__ */ jsx15("div", { className: "iz-image-content", onClick: () => inputRef.current.click(), children: ((_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.value) || "selecione uma imagem" }),
    !!props.error && /* @__PURE__ */ jsx15("div", { className: "iz-input-error", children: props.error })
  ] });
}

// components/types/form/types/input/index.tsx
import { useState as useState6 } from "react";

// components/types/form/types/input/styles.tsx
import styled16 from "styled-components";
var Container13 = styled16.div`
    width: 100%;
    padding-top: .3rem;

    .iz-input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;
        padding-right: ${({ password }) => password ? ".6rem" : "0rem"};
        background-color: ${({ theme }) => theme.primary};

        input {
            border: 0;
            padding: .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.t6};

            &:disabled {
                background-color: ${({ theme }) => theme.t2};
                color: ${({ theme }) => theme.t6};
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }

        i {
            color: ${({ theme }) => theme.t3};
            cursor: pointer;
        }
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;

// components/types/form/types/input/index.tsx
import _11 from "lodash";
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
function InputText(props) {
  const [showPassword, setShowPassword] = useState6(false);
  const register = (props.register || ((name) => ({})))(props.name || "");
  const onChange = (event) => {
    const value = event.target.value || "";
    event.target.value = props.mask ? props.mask(value) : value;
    if (register.onChange) register.onChange(event);
    if (props.onChange) props.onChange(value);
  };
  return /* @__PURE__ */ jsxs10(Container13, { className: props.className, error: props.error, password: props.type === "password", children: [
    !!props.label && /* @__PURE__ */ jsxs10(InputLabel, { children: [
      props.label,
      props.required ? "*" : ""
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: "iz-input-content", children: [
      /* @__PURE__ */ jsx16(
        "input",
        {
          ..._11.omit(props, ["className", "register", "mask"]),
          type: props.type === "password" ? showPassword ? "text" : "password" : props.type,
          maxLength: props.maxLength || 255,
          onFocus: () => {
            if (props.onFocus) props.onFocus(props.name);
          },
          ...register,
          onChange
        }
      ),
      props.type === "password" && /* @__PURE__ */ jsx16(
        "i",
        {
          "aria-hidden": true,
          className: showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye",
          onClick: () => setShowPassword(!showPassword)
        }
      )
    ] }),
    !!props.error && /* @__PURE__ */ jsx16("div", { className: "iz-input-error", children: props.error })
  ] });
}

// components/types/form/types/select/index.tsx
import { useState as useState7 } from "react";

// components/types/form/types/select/styles.tsx
import styled17 from "styled-components";
var Container14 = styled17.div`
    width: 100%;
    padding-top: .3rem;

    .iz-input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        cursor: pointer;

        select {
            border: 0;
            padding: .5rem 2.3rem .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            appearance: none;
            cursor: pointer;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.t6};

            &:disabled {
                background-color: ${({ theme }) => theme.t2};
                color: ${({ theme }) => theme.t6};
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }

        i {
            position: absolute;
            top: 50%;
            right: .8rem;
            transform: translateY(-50%);
            font-size: .8rem;
            color: ${({ theme }) => theme.t6};
        }
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;

// components/types/form/types/select/index.tsx
import _12 from "lodash";
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
function InputSelect(props) {
  const [focus, setFocus] = useState7(false);
  const register = (props.register || ((name) => ({})))(props.name || "");
  const onChange = (event) => {
    const value = event.target.value || "";
    if (register.onChange) register.onChange(event);
    if (props.onChange) props.onChange(value);
  };
  return /* @__PURE__ */ jsxs11(Container14, { className: props.className, error: props.error, children: [
    !!props.label && /* @__PURE__ */ jsxs11(InputLabel, { children: [
      props.label,
      props.required ? "*" : ""
    ] }),
    /* @__PURE__ */ jsxs11("div", { className: "iz-input-content", children: [
      /* @__PURE__ */ jsx17(
        "select",
        {
          ..._12.omit(props, ["className", "onChange", "onFocus", "options", "onMouseDown", "onBlur", "maxLength", "required", "register"]),
          onMouseDown: () => setFocus(!focus),
          onFocus: () => {
            if (props.onFocus) props.onFocus(props.name);
          },
          ...register,
          onBlur: (event) => {
            if (register.onBlur) register.onBlur(event);
            setFocus(false);
          },
          onChange,
          children: _12.map(
            props.options,
            (data, index) => /* @__PURE__ */ jsx17(
              "option",
              {
                value: Object.keys(data),
                children: Object.values(data)
              },
              index
            )
          )
        }
      ),
      /* @__PURE__ */ jsx17("i", { "aria-hidden": true, className: focus ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down" })
    ] }),
    !!props.error && /* @__PURE__ */ jsx17("div", { className: "iz-input-error", children: props.error })
  ] });
}

// components/types/form/types/button/styles.tsx
import styled18 from "styled-components";
var Container15 = styled18.button`
    border-radius: 5px;
    font-size: .8rem;
    font-weight: 500;
    transition: ease .3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.transparent ? props.theme.t6 : props.outline ? props.color || props.theme.secondary : "#fff !important"};
    background: ${(props) => props.transparent ? "transparent" : props.outline ? props.theme.t05 : props.color || props.theme.secondary};
    border: 1px solid ${(props) => props.transparent ? "transparent" : props.outline ? props.theme.t05 : props.color || props.theme.secondary};
    pointer-events: ${(props) => props.loading === "true" ? "none" : "auto"};
    cursor: ${(props) => props.loading === "true" ? "default" : "pointer"};
    opacity: ${(props) => props.loading === "true" ? 0.6 : 1};
    padding: .4rem 2.5rem;
    transition: ease .3s;

    span {
        text-align: center;
        cursor: ${(props) => props.loading === "true" ? "default" : "pointer"};
    }

    &:disabled {
        pointer-events: none;
        
        &::before {
            opacity: .6;
        }
    }

    &:hover {
        opacity: .9;
        color: ${(props) => props.transparent ? props.theme.t6 : props.outline ? props.color || props.theme.secondary : "#fff"};
        
        &::before {
            background: ${(props) => props.transparent ? "transparent" : props.color || props.theme.secondary};
        }
    }
`;

// components/types/form/types/button/loading/styles.tsx
import styled19 from "styled-components";
var Container16 = styled19.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 2rem;
    margin-right: .5rem;

    div {
        width: .5rem;
        height: .5rem;
        border-radius: 1rem;
        background: rgb(255, 255, 255, 1);

        &:nth-child(1) {
            animation: blinkOne infinite ease 2s;
        }

        &:nth-child(2) {
            animation: blinkTwo infinite ease 2s;
        }

        &:nth-child(3) {
            animation: blinkThree infinite ease 2s;
        }
    }

    @keyframes blinkOne {
        0% {
            opacity: 0.8;
        }
        20% {
            opacity: 0.2;
        }
        40% {
            opacity: 0.2;
        }
        60% {
            opacity: 0.2;
        }
        80% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.8;
        }
    }

    @keyframes blinkTwo {
        0% {
            opacity: 0.2;
        }
        20% {
            opacity: 0.8;
        }
        40% {
            opacity: 0.2;
        }
        60% {
            opacity: 0.2;
        }
        80% {
            opacity: 0.8;
        }
        100% {
            opacity: 0.2;
        }
    }

    @keyframes blinkThree {
        0% {
            opacity: 0.2;
        }
        25% {
            opacity: 0.2;
        }
        50% {
            opacity: 0.8;
        }
        75% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.2;
        }
    }
`;

// components/types/form/types/button/loading/index.tsx
import { jsx as jsx18, jsxs as jsxs12 } from "react/jsx-runtime";
function Loading() {
  return /* @__PURE__ */ jsxs12(Container16, { children: [
    /* @__PURE__ */ jsx18("div", {}),
    /* @__PURE__ */ jsx18("div", {}),
    /* @__PURE__ */ jsx18("div", {})
  ] });
}

// components/types/form/types/button/index.tsx
import _13 from "lodash";
import { jsx as jsx19, jsxs as jsxs13 } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsxs13(
    Container15,
    {
      loading: String(!!props.loading),
      disabled: props.disabled,
      type: props.type || "button",
      ..._13.omit(props, ["loading", "type"]),
      children: [
        !!props.loading && /* @__PURE__ */ jsx19(Loading, {}),
        /* @__PURE__ */ jsx19("span", { children: props.label })
      ]
    }
  );
}

// components/types/form/types/datetime/styles.tsx
import styled20 from "styled-components";
var Container17 = styled20.div`
    width: 100%;
    padding-top: .3rem;

    .iz-input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;

        input {
            border: 0;
            padding: .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.t6};
            color-scheme: ${(props) => props.theme || "light"};

            &:disabled {
                background-color: ${({ theme }) => theme.t2};
                color: ${({ theme }) => theme.t6};
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;

// components/types/form/types/datetime/index.tsx
import _14 from "lodash";
import { jsx as jsx20, jsxs as jsxs14 } from "react/jsx-runtime";
function InputDateTime(props) {
  const register = (props.register || ((name) => ({})))(props.name || "");
  const onChange = (event) => {
    const value = event.target.value || "";
    event.target.value = props.mask ? props.mask(value) : value;
    if (register.onChange) register.onChange(event);
    if (props.onChange) props.onChange(event);
  };
  return /* @__PURE__ */ jsxs14(Container17, { className: props.className, error: props.error, children: [
    !!props.label && /* @__PURE__ */ jsxs14(InputLabel, { children: [
      props.label,
      props.required ? "*" : ""
    ] }),
    /* @__PURE__ */ jsx20("div", { className: "iz-input-content", children: /* @__PURE__ */ jsx20(
      "input",
      {
        ..._14.omit(props, ["className", "onChange", "mask", "type", "required", "register"]),
        type: "datetime-local",
        onFocus: () => {
          if (props.onFocus) props.onFocus(props.name);
        },
        maxLength: props.maxLength || 255,
        ...register,
        onChange
      }
    ) }),
    !!props.error && /* @__PURE__ */ jsx20("div", { className: "iz-input-error", children: props.error })
  ] });
}

// components/types/form/types/textarea/styles.tsx
import styled21 from "styled-components";
var Container18 = styled21.div`
    width: 100%;
    padding-top: .3rem;

    .iz-input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ error, theme }) => error ? theme.negative : theme.t2};
        border-radius: 5px;
        overflow: hidden;

        textarea {
            border: 0;
            padding: .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.t6};

            &:disabled {
                background-color: ${({ theme }) => theme.t2};
                color: ${({ theme }) => theme.t6};
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .iz-input-error {
        color: ${({ theme }) => theme.negative};
        font-size: .7rem;
    }
`;

// components/types/form/types/textarea/index.tsx
import _15 from "lodash";
import { jsx as jsx21, jsxs as jsxs15 } from "react/jsx-runtime";
function InputTextarea(props) {
  const register = (props.register || ((name) => ({})))(props.name || "");
  const onChange = (event) => {
    const value = event.target.value || "";
    event.target.value = props.mask ? props.mask(value) : value;
    if (register.onChange) register.onChange(event);
    if (props.onChange) props.onChange(value);
  };
  return /* @__PURE__ */ jsxs15(Container18, { className: props.className, error: props.error, children: [
    !!props.label && /* @__PURE__ */ jsxs15(InputLabel, { children: [
      props.label,
      props.required ? "*" : ""
    ] }),
    /* @__PURE__ */ jsx21("div", { className: "iz-input-content", children: /* @__PURE__ */ jsx21(
      "textarea",
      {
        ..._15.omit(props, ["onFocus", "maxLength", "className", "onChange", "mask", "rows", "required", "register"]),
        maxLength: props.maxLength,
        rows: props.rows || 5,
        onFocus: () => {
          if (props.onFocus) props.onFocus(props.name);
        },
        ...register,
        onChange
      }
    ) }),
    !!props.error && /* @__PURE__ */ jsx21("div", { className: "iz-input-error", children: props.error })
  ] });
}

// components/types/form/index.tsx
import { jsx as jsx22, jsxs as jsxs16 } from "react/jsx-runtime";
function Form(props) {
  const formRef = props.formRef || useRef2({});
  const setSchema = () => {
    const schema2 = {};
    _16.forEach(props.inputs, (data) => {
      if (!data.validation) return;
      schema2[data.name] = data.validation;
    });
    if (props.validation) return props.validation(z.object(schema2));
    return z.object(schema2);
  };
  const schema = setSchema();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: props.defaultValues,
    mode: "all"
  });
  useEffect6(() => {
    if (!props.clearWhen) return;
    reset(void 0, { keepErrors: false });
  }, [props.clearWhen]);
  useEffect6(() => {
    var _a;
    if (!props.defaultValues || !((_a = Object.keys(props.defaultValues || {})) == null ? void 0 : _a.length)) return;
    _16.forEach(props.defaultValues, (value, key) => {
      const input = _16.find(props.inputs, (data) => data.name === key);
      props.defaultValues[key] = input.mask ? input.mask(value) : value;
    });
    reset(props.defaultValues, { keepErrors: false });
  }, [props.defaultValues]);
  const component = (data) => {
    var _a;
    const component2 = types_exports[_16.camelCase(data.type)];
    const TypeComponent = component2 || InputText;
    return /* @__PURE__ */ jsx22(
      TypeComponent,
      {
        ..._16.omit(data, ["validation"]),
        id: data.name,
        type: component2 ? void 0 : data.type,
        error: (_a = errors[data.name]) == null ? void 0 : _a.message,
        register
      }
    );
  };
  return /* @__PURE__ */ jsxs16(Container10, { ref: formRef, onSubmit: handleSubmit(props.onSubmit), children: [
    _16.map(
      props.inputs,
      (data, index) => /* @__PURE__ */ jsx22(React10.Fragment, { children: component(data) }, index)
    ),
    _16.isArray(props.buttons) && /* @__PURE__ */ jsx22("div", { className: "form-buttons", children: _16.map(
      props.buttons,
      (data, index) => /* @__PURE__ */ jsx22(Button, { ...data }, index)
    ) })
  ] });
}

// components/types/chart/styles.tsx
import styled22 from "styled-components";
var Container19 = styled22.div`

`;

// components/types/chart/index.tsx
import dynamic from "next/dynamic";
import _17 from "lodash";
import { jsx as jsx23 } from "react/jsx-runtime";
var ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
function Chart(props) {
  const { content: themeContent } = useTheme();
  const monitor = props.content || [];
  const series = _17.map(props.yAxis, (value, key) => ({
    name: key || "",
    data: _17.map(monitor, (data) => _17.isFunction(value) ? value(data) : 0)
  }));
  const options = {
    colors: _17.map(props.colors || [], (value) => themeContent[value] || value || themeContent.secondary),
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: { gradient: { opacityFrom: 0.9, opacityTo: 0.8 } },
    legend: { show: false },
    chart: { toolbar: { show: false } },
    yaxis: {
      min: props.min,
      max: props.max,
      labels: { style: { colors: _17.map(monitor, () => themeContent.t6) } }
    },
    xaxis: {
      categories: _17.map(monitor, (data) => _17.isFunction(props.xAxis) ? props.xAxis(data) : ""),
      labels: { style: { colors: _17.map(monitor, () => themeContent.t6) } }
    }
  };
  return /* @__PURE__ */ jsx23(Container19, { children: /* @__PURE__ */ jsx23(
    ApexChart,
    {
      options,
      series,
      type: "area",
      height: props.height || 200,
      width: "100%"
    }
  ) });
}

// components/types/avatar/index.tsx
import { useEffect as useEffect7, useRef as useRef3, useState as useState8 } from "react";

// components/types/avatar/styles.tsx
import styled23 from "styled-components";
var Container20 = styled23.div`
  width: ${({ size }) => size || "2.3rem"};
  height: ${({ size }) => size || "2.3rem"};
  border-radius: ${({ size }) => size || "2.3rem"};
  border: 2px solid ${({ theme }) => theme.t1};
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ onClick }) => onClick ? "pointer" : "default"};
  transition: ease .2s;
  position: relative;
  font-size: ${({ width }) => width / 2.5}px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transition: ease .2s;
    background: ${({ theme }) => theme.t03};
    border-radius: ${({ size }) => size || "2.3rem"};
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transition: ease .2s;
    background: ${({ theme }) => theme.t05};
    border-radius: ${({ size }) => size || "2.3rem"};
    z-index: 0;
  }

  &:hover {
    &::before {
      transform: scale(1.6);
    }

    &::after {
      transform: scale(1.3);
    }
  }
`;

// components/types/avatar/index.tsx
import randomColor from "randomcolor";
import _18 from "lodash";
import { jsx as jsx24 } from "react/jsx-runtime";
function Avatar(props) {
  const containerRef = useRef3({});
  const [color, setColor] = useState8("");
  useEffect7(() => {
    if (color) return;
    (async () => {
      const storageKey = process.env.NEXT_PUBLIC_STORAGE_AVATAR;
      const storageColor = await getStorage(storageKey);
      if (storageColor) return setColor(storageColor);
      const random = randomColor({ luminosity: "light" });
      await setStorage(storageKey, random);
      setColor(random);
    })();
  }, [color]);
  const name = () => {
    const [first, secound] = _18.split(props.name, " ") || [];
    if (first && secound) return `${first} ${secound}`;
    if (first) return first;
    return "IZ";
  };
  return /* @__PURE__ */ jsx24(
    Container20,
    {
      ref: containerRef,
      color,
      width: containerRef.current.offsetWidth,
      ...props,
      children: /* @__PURE__ */ jsx24("span", { children: _18.upperCase(name()) })
    }
  );
}

// components/types/lottie/styles.tsx
import styled24 from "styled-components";
var Container21 = styled24.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;

  label {
    font-size: ${(props) => props.size || "2"}rem;
    color: ${(props) => props.theme.t5};
  }

  label:first-child {
    font-weight: 900;
    color: ${(props) => props.theme.secondary};
  }

  label:last-child {
    font-weight: 600;
  }
`;

// components/types/lottie/index.tsx
import LottieReact from "react-lottie";

// components/types/lottie/animations/loader.json
var loader_default = { v: "4.8.0", meta: { g: "LottieFiles AE 3.4.5", a: "", k: "", d: "", tc: "" }, fr: 60, ip: 0, op: 152, w: 1024, h: 1024, nm: "loader1", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Shape Layer 2", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10, x: "var $bm_rt;\n$bm_rt = thisComp.layer('Null 1').transform.rotation;" }, p: { a: 0, k: [512, 512, 0], ix: 2, x: "var $bm_rt;\n$bm_rt = thisComp.layer('Null 1').transform.position;" }, a: { a: 0, k: [83.27, 6, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.398, y: 1 }, o: { x: 0.573, y: 0 }, t: 14, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-85.127, 157.906], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [80.223, -148.809], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [50, 38], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-104.847, -79.448], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.836, y: 0 }, t: 41, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-119.289, 133.982], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [122.787, -137.911], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [-24.884, 23.246], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-196.288, -48.478], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 54, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [85.13, -251.636], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-122.897, 111.938], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-39.693, 119.128], [-66.383, 67.406], [-100.048, 0], [-67.415, -66.385], [309.312, -266.065], [67.028, -84.864]], v: [[0, -366], [275.144, -227.127], [159.077, -38.579], [215.016, 276.104], [0, 366], [-256.787, 260.799], [-150.256, -23.325], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 60, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [82.924, -246.192], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-55.859, 176.202], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-40.989, 124.23], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [24.59, -160.109], [67.028, -84.864]], v: [[0, -366], [276.613, -226.103], [-75.017, -73.301], [217.735, 274.957], [0, 366], [-256.787, 260.799], [-299.117, -9.604], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 65, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [81.086, -241.656], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [94.229, 285.418], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-42.068, 128.482], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [-111.15, -238.582], [67.028, -84.864]], v: [[0, -366], [277.836, -225.251], [294.19, 46.954], [220.001, 274.001], [0, 366], [-256.787, 260.799], [123.521, -40.948], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 71, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [78.88, -236.212], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [82.272, 276.917], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-112.252, 217.097], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [-98.391, -232.597], [67.028, -84.864]], v: [[0, -366], [279.305, -224.228], [2.74, -72.763], [222.719, 272.855], [0, 366], [-256.787, 260.799], [-234.073, 12.428], [-287.381, -226.67]], c: true }] }, { i: { x: 0.439, y: 1 }, o: { x: 0.333, y: 0 }, t: 81, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [73.366, -222.603], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [52.379, 255.665], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-103.19, 214.939], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [-66.496, -217.635], [67.028, -84.864]], v: [[0, -366], [282.976, -221.67], [230.193, 16.947], [229.517, 269.988], [0, 366], [-256.787, 260.799], [-76.962, -15.009], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 94, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [70.093, -170.914], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-157.227, 316.209], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-52.439, 127.868], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [75.268, -151.376], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [250.126, 62.099], [260.784, 256.803], [0, 366], [-256.787, 260.799], [14.671, -55.458], [-287.381, -226.67]], c: true }] }, { i: { x: 0.368, y: 1 }, o: { x: 0.333, y: 0 }, t: 114, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160.001], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-114.582, 138.029], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.009], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [230.987, -278.253], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [338.14, 64.524], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-29.052, 9.798], [-287.381, -226.67]], c: true }] }, { i: { x: 0.439, y: 1 }, o: { x: 0.671, y: 0 }, t: 130, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-103.088, 145.785], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.01], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [172.152, -227.738], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [26.401, -124.412], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-231.181, 72.709], [-287.381, -226.67]], c: true }] }, { t: 155, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-85.127, 157.906], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [80.223, -148.809], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [50, 38], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-104.847, -79.448], [-287.381, -226.67]], c: true }] }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "st", c: { a: 0, k: [0.8118, 0.8039, 0.8039, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0, ix: 5 }, lc: 1, lj: 1, ml: 4, bm: 0, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: false }, { ty: "fl", c: { a: 0, k: [0.7451, 0.7451, 0.7451, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [78, 6], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: 0, op: 152, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Shape Layer 4", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10, x: "var $bm_rt;\n$bm_rt = thisComp.layer('Null 1').transform.rotation;" }, p: { a: 0, k: [512, 512, 0], ix: 2, x: "var $bm_rt;\n$bm_rt = thisComp.layer('Null 1').transform.position;" }, a: { a: 0, k: [83.27, 6, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 1, k: [{ i: { x: 0.833, y: 1 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-93.22, 152.445], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [121.644, -184.373], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [39.367, -35.179], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-161.77, -10.89], [-287.381, -226.67]], c: true }] }, { i: { x: 0.398, y: 1 }, o: { x: 0.573, y: 0 }, t: 21, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-85.127, 157.906], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [80.223, -148.809], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [50, 38], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-104.847, -79.448], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.836, y: 0 }, t: 48, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-119.289, 133.982], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [122.787, -137.911], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [-24.884, 23.246], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-196.288, -48.478], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 61, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [85.13, -251.636], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-122.897, 111.938], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-39.693, 119.128], [-66.383, 67.406], [-100.048, 0], [-67.415, -66.385], [309.312, -266.065], [67.028, -84.864]], v: [[0, -366], [275.144, -227.127], [159.077, -38.579], [215.016, 276.104], [0, 366], [-256.787, 260.799], [-150.256, -23.325], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 67, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [82.924, -246.192], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-55.859, 176.202], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-40.989, 124.23], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [24.59, -160.109], [67.028, -84.864]], v: [[0, -366], [276.613, -226.103], [-75.017, -73.301], [217.735, 274.957], [0, 366], [-256.787, 260.799], [-299.117, -9.604], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 72, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [81.086, -241.656], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [94.229, 285.418], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-42.068, 128.482], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [-111.15, -238.582], [67.028, -84.864]], v: [[0, -366], [277.836, -225.251], [294.19, 46.954], [220.001, 274.001], [0, 366], [-256.787, 260.799], [123.521, -40.948], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 78, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [78.88, -236.212], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [82.272, 276.917], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-112.252, 217.097], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [-98.391, -232.597], [67.028, -84.864]], v: [[0, -366], [279.305, -224.228], [2.74, -72.763], [222.719, 272.855], [0, 366], [-256.787, 260.799], [-234.073, 12.428], [-287.381, -226.67]], c: true }] }, { i: { x: 0.439, y: 1 }, o: { x: 0.333, y: 0 }, t: 88, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [73.366, -222.603], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [52.379, 255.665], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-103.19, 214.939], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [-66.496, -217.635], [67.028, -84.864]], v: [[0, -366], [282.976, -221.67], [230.193, 16.947], [229.517, 269.988], [0, 366], [-256.787, 260.799], [-76.962, -15.009], [-287.381, -226.67]], c: true }] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 101, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [70.093, -170.914], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-157.227, 316.209], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-52.439, 127.868], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [75.268, -151.376], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [250.126, 62.099], [260.784, 256.803], [0, 366], [-256.787, 260.799], [14.671, -55.458], [-287.381, -226.67]], c: true }] }, { i: { x: 0.368, y: 1 }, o: { x: 0.333, y: 0 }, t: 121, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160.001], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-114.582, 138.029], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.009], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [230.987, -278.253], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [338.14, 64.524], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-29.052, 9.798], [-287.381, -226.67]], c: true }] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.671, y: 0 }, t: 137, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-103.088, 145.785], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.01], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [172.152, -227.738], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [26.401, -124.412], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-231.181, 72.709], [-287.381, -226.67]], c: true }] }, { i: { x: 0.439, y: 1 }, o: { x: 0.167, y: 0.167 }, t: 151, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-93.22, 152.445], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [121.644, -184.373], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [39.367, -35.179], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-161.77, -10.89], [-287.381, -226.67]], c: true }] }, { t: 162, s: [{ i: [[-116.537, 0], [-66.195, -94.389], [48, -160], [65.067, -66.069], [102.081, 0], [66.068, 65.058], [-85.127, 157.906], [-49.234, 62.335]], o: [[124.041, 0], [41.676, 59.427], [-61.503, 205.011], [-66.384, 67.406], [-100.048, 0], [-67.415, -66.385], [80.223, -148.809], [67.028, -84.864]], v: [[0, -366], [299.865, -209.905], [50, 38], [260.784, 256.803], [0, 366], [-256.787, 260.799], [-104.847, -79.448], [-287.381, -226.67]], c: true }] }], ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: false }, { ty: "st", c: { a: 0, k: [0.8118, 0.8039, 0.8039, 1], ix: 3 }, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 0, ix: 5 }, lc: 1, lj: 1, ml: 4, bm: 0, nm: "Stroke 1", mn: "ADBE Vector Graphic - Stroke", hd: false }, { ty: "fl", c: { a: 0, k: [0.3451, 0.4118, 0.8549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: false }, { ty: "tr", p: { a: 0, k: [78, 6], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: false }], ip: -19, op: 167, st: 7, bm: 0 }, { ddd: 0, ind: 3, ty: 3, nm: "Null 1", sr: 1, ks: { o: { a: 0, k: 0, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.39], y: [1] }, o: { x: [0.695], y: [0] }, t: 0, s: [0] }, { i: { x: [0.259], y: [1] }, o: { x: [0.557], y: [0] }, t: 38, s: [-32] }, { i: { x: [0.496], y: [1] }, o: { x: [0.769], y: [0] }, t: 90, s: [780] }, { i: { x: [0.417], y: [1] }, o: { x: [0.6], y: [0] }, t: 125, s: [702] }, { t: 152, s: [720] }], ix: 10 }, p: { a: 0, k: [512, 512, 0], ix: 2 }, a: { a: 0, k: [0, 0, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, ip: 0, op: 152, st: 0, bm: 0 }], markers: [] };

// components/types/lottie/animations/index.tsx
var animations_default = { loader: loader_default };

// components/types/lottie/index.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
function Lottie(props) {
  const getAnimation = () => {
    let animation;
    for (const propName of Object.keys(props)) {
      if (animation) continue;
      animation = animations_default[propName];
    }
    return animation;
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: "svg",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
    path: props.src,
    animationData: getAnimation()
  };
  return /* @__PURE__ */ jsx25(Container21, { ...props, children: /* @__PURE__ */ jsx25(
    LottieReact,
    {
      width: props.size || 180,
      height: props.size || 180,
      options: defaultOptions
    }
  ) });
}

// components/types/credit-card/styles.tsx
import styled25 from "styled-components";
var Container22 = styled25.div`
    border-radius: 8px 8px 0 0;
    transition: .2s ease .2s background, .2s ease .2s padding;
    position: relative;
    display: flex;
    gap: .5rem;
    height: 11rem;
    pointer-events: all;

    @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
        width: 100%;
    }

    &:hover {
        .iz-credit-card-function-container {
            margin-left: 0;

            .iz-credit-card-function {
                transform: translateX(0);
                opacity: 1;
            }

            .iz-credit-card-function:nth-child(1) {
                transition: .3s ease transform, .2s ease .1s opacity, ease .3s color;
            }

            .iz-credit-card-function:nth-child(2) {
                transition: .3s ease .1s transform, .2s ease .2s opacity, ease .3s color;
            }
        }
    }
`;

// components/types/credit-card/card/index.tsx
import { useEffect as useEffect8, useRef as useRef4 } from "react";

// components/types/credit-card/card/styles.tsx
import styled26 from "styled-components";
var Container23 = styled26.div`
    height: 11rem;
    width: 20rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.t05};
    padding: 1.5rem;
    display: inline-flex;
    justify-content: space-between;
    gap: 1rem;
    white-space: nowrap;
    position: relative;
    z-index: 0;
    backdrop-filter: blur(5px);

    @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
        width: 100%;
        height: 10rem;
    }

    @media(max-width: ${({ theme }) => theme.mobileMinWidth}) {
        height: 9rem;
    }

    .iz-credit-card-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;

        .iz-credit-card-top {
            div {
                width: 2.5rem;
                height: 1.5rem;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }

        .iz-credit-card-bottom {
            display: flex;
            flex-direction: column;
            gap: .8rem;

            .iz-credit-card-elipse {
                position: absolute;
                left: 0;
                right: 0;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .iz-credit-card-number {
                font-size: 1.1rem;
                font-weight: 600;
                color: ${({ theme }) => theme.t6};
                position: relative;
                height: 1.1rem;

                @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                    font-size: .9rem;
                    height: .9rem;
                }

                @media(max-width: ${({ theme }) => theme.mobileMinWidth}) {
                    font-size: .7rem;
                    height: .7rem;
                }
            }

            .iz-credit-card-name {
                font-size: .9rem;
                font-weight: 500;
                position: relative;
                text-transform: uppercase;
                color: ${({ theme }) => theme.t5};
                height: .9rem;

                @media(max-width: ${({ theme }) => theme.mobileMaxWidth}) {
                    font-size: .7rem;
                    height: .7rem;
                }

                @media(max-width: ${({ theme }) => theme.mobileMinWidth}) {
                    font-size: .5rem;
                    height: .5rem;
                }
            }
        }
    }

    .iz-credit-card-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        gap: 1rem;

        .iz-credit-card-top {
            display: flex;
            justify-content: end;

            div {
                width: 2.5rem;
                height: 2.5rem;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }

        .iz-credit-card-bottom {
            display: flex;
            flex-direction: column;
            text-align: right;

            span:first-child {
                font-size: .6rem;
                font-weight: 600;
                color: ${({ theme }) => theme.t3};
            }

            span:last-child {
                font-size: .8rem;
                font-weight: 600;
                color: ${({ theme }) => theme.t5};
            }
        }
    }
`;

// components/types/credit-card/tools/index.tsx
var import_credit_card_type = __toESM(require_dist());

// components/types/credit-card/assets/index.tsx
var assets = {
  Chip: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9Ijc2IiB2aWV3Qm94PSIwIDAgMTAwIDc2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGM0QwOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkFENzY2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNOTIuNzI3IDc1LjQ1NWgtODUuNDU1Yy00IDAtNy4yNzMtMy4yNzMtNy4yNzMtNy4yNzN2LTYwLjkwOWMwLTQgMy4yNzMtNy4yNzMgNy4yNzMtNy4yNzNoODUuNDU1YzQgMCA3LjI3MyAzLjI3MyA3LjI3MyA3LjI3M3Y2MC45MDljMCA0LTMuMjczIDcuMjczLTcuMjczIDcuMjczIiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTcyLjEyMyAyOC40ODVoMjcuODc4di0xLjgxOGgtMjkuNjQ4Yy0uOTY1IDAtMS44MzIuNjAxLTIuMTcyIDEuNTA0LTIuMjg3IDYuMDcyLTIuNDMzIDEyLjU5NC0uNDM4IDE5Ljg0Mi40NTUgMS42NTQuNDM1IDMuNC0uMSA1LjAzLTIuMDM2IDYuMTk1LTcuNzc5IDE5Ljk4OC0xOC41NTEgMTkuOTg4LTExLjAwOCAwLTE2LjA5Ni0xNS42OTktMTcuMzM0LTIxLjk1Mi0uMTU1LS43ODQtLjEyMi0xLjU5Mi4xMDctMi4zNTcgMS42OTUtNS42NDggMi4wOTQtMTAuNjQtLjAxNi0xOS41OS0uMjA1LS44Ny0uMTgyLTEuNzgzLjA0OC0yLjY0NiA0LjQ4LTE2Ljc1NSAxMi44ODItMjAuMTQ3IDEyLjk2NS0yMC4xNzkuMzU2LS4xMzIuNTkzLS40NzIuNTkzLS44NTJ2LTUuNDU1aC0xLjgxOHYzLjc3NmMwIC42NS0uMzMyIDEuMjUyLS44ODQgMS41OTYtMi44MDMgMS43NDItOC45MDQgNi45MzYtMTIuNTU3IDIwLjQ1Ni0uMTguNjY4LS43ODEgMS4xMzYtMS40NzMgMS4xMzNsLTI4LjcyMi0uMTM5djEuODE4bDI3LjQxNi4xMzNjMS40NjguMDA3IDIuNzM1IDEuMDQxIDMuMDM3IDIuNDc4IDEuNDE2IDYuNzQxIDEuMjE5IDExLjAzOS4wODIgMTUuNDU4LS4zMTYgMS4yMy0xLjQyIDIuMDk2LTIuNjkgMi4xMDlsLTI3Ljg0NC4yN3YxLjgxOWwyOC42MDUtLjI3OGMuNjkzLS4wMDcgMS4yOTYuNDczIDEuNDM1IDEuMTUyIDEuNDQyIDcuMDQxIDYuODg3IDIzLjA3IDE5LjA1IDIzLjA3IDYuMzY4IDAgMTIuMDYyLTQuMjUgMTYuNDY3LTEyLjI5IDIuNjQ0LTQuODI4IDQuMDY3LTkuNTkxIDQuNTQxLTExLjM0NmgyOS45MDF2LTEuODE4aC0yOC4wMTZjLTEuMTU4IDAtMi4xODMtLjc3Mi0yLjQ4OS0xLjg4OS0xLjY5Mi02LjE2NC0xLjc2MS0xMS43NTUtLjItMTYuOTU5LjM3MS0xLjIzNSAxLjUzOC0yLjA2MSAyLjgyNy0yLjA2MXptLTE3LjE1LTIxLjkxNGMuMDQ1LjAyMiA0LjUxOSAyLjMyMiA5LjI1MyAxMC4wNDEuMTcyLjI4LjQ3LjQzNC43NzYuNDM0LjE5OCAwIC4zOTktLjA2NC41NzEtLjIwMi4zNjUtLjI5Mi40MTYtLjgzNy4xNzItMS4yMzUtMy41Ny01LjgwNS03LjAyNC04LjcxLTguNzc1LTkuOTMxLS40My0uMjk5LS42OC0uNzkyLS42OC0xLjMxNXYtNC4zNjNoLTEuODE4djUuNzU4YzAgLjM0NS4xOTUuNjU5LjUwMi44MTN6IiBmaWxsPSIjMEMwMjAwIi8+PC9zdmc+'",
  AmericanExpress: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBjeD0iMTcuNTQxJSIgY3k9IjE3LjQ2NiUiIGZ4PSIxNy41NDElIiBmeT0iMTcuNDY2JSIgcj0iOTEuMjM3JSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiM2NUJDRjEiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMjNBREUzIiBvZmZzZXQ9IjQ1LjQ2JSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwREE2RTAiIG9mZnNldD0iNTAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzA1NTFDMyIgb2Zmc2V0PSIxMDAlIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGg1MTJ2NTEyaC01MTJ6Ii8+PHBhdGggZD0iTTQ1Ljc5MSAyMjAuOTM1bC05Ljc3My0yMy44MTMtOS43MTcgMjMuODEzaDE5LjQ4OXptMjE1LjI4OS05LjQ4M2MtMS45NjIgMS4xOTEtNC4yODMgMS4yMzEtNy4wNjMgMS4yMzFoLTE3LjM0NXYtMTMuMjY4aDE3LjU4MWMyLjQ4OCAwIDUuMDg0LjExMiA2Ljc3MSAxLjA3NyAxLjg1Mi44NyAyLjk5OCAyLjcyMiAyLjk5OCA1LjI4MSAwIDIuNjExLTEuMDkgNC43MTItMi45NDIgNS42Nzl6bTEyMy43MzkgOS40ODNsLTkuODgxLTIzLjgxMy05LjgyNyAyMy44MTNoMTkuNzA3em0tMjMwLjY1OCAyNS43NzZoLTE0LjYzN2wtLjA1NC00Ni43ODQtMjAuNzA0IDQ2Ljc4NGgtMTIuNTM2bC0yMC43NTgtNDYuODI1djQ2LjgyNWgtMjkuMDRsLTUuNDg2LTEzLjMyNGgtMjkuNzI5bC01LjU0MiAxMy4zMjRoLTE1LjUwN2wyNS41NjgtNTkuNzM1aDIxLjIxNGwyNC4yODQgNTYuNTU2di01Ni41NTZoMjMuMzA0bDE4LjY4NiA0MC41MjMgMTcuMTY1LTQwLjUyM2gyMy43NzJ2NTkuNzM1aC4wMDJ6bTU4LjMzOCAwaC00Ny42OTd2LTU5LjczNWg0Ny42OTd2MTIuNDM5aC0zMy40MTl2MTAuNzY3aDMyLjYxN3YxMi4yNDVoLTMyLjYxN3YxMS45MjloMzMuNDE5djEyLjM1NHptNjcuMjUxLTQzLjY0N2MwIDkuNTI0LTYuMzU3IDE0LjQ0NC0xMC4wNjEgMTUuOTIyIDMuMTI0IDEuMTg5IDUuNzkzIDMuMjkgNy4wNjMgNS4wMyAyLjAxNiAyLjk3MSAyLjM2NCA1LjYyNSAyLjM2NCAxMC45NnYxMS43MzVoLTE0LjQwMWwtLjA1NC03LjUzM2MwLTMuNTk0LjM0NC04Ljc2NC0yLjI1NC0xMS42MzctMi4wODYtMi4xMDEtNS4yNjYtMi41NTctMTAuNDA3LTIuNTU3aC0xNS4zMjd2MjEuNzI3aC0xNC4yNzd2LTU5LjczNWgzMi44NGM3LjI5NyAwIDEyLjY3My4xOTMgMTcuMjg5IDIuODYxIDQuNTE3IDIuNjY4IDcuMjI1IDYuNTY0IDcuMjI1IDEzLjIyN3ptMjIuODUgNDMuNjQ3aC0xNC41Njl2LTU5LjczNWgxNC41Njl2NTkuNzM1em0xNjkuMDE3IDBoLTIwLjIzM2wtMjcuMDY0LTQ0LjgzNHY0NC44MzRoLTI5LjA3OGwtNS41NTctMTMuMzI0aC0yOS42NmwtNS4zOTEgMTMuMzI0aC0xNi43MDdjLTYuOTQgMC0xNS43MjctMS41MzUtMjAuNzA0LTYuNjA3LTUuMDE4LTUuMDcyLTcuNjI5LTExLjk0Mi03LjYyOS0yMi44MDUgMC04Ljg1OSAxLjU2LTE2Ljk1OCA3LjY5Ny0yMy4zNTggNC42MTYtNC43NjcgMTEuODQ1LTYuOTY1IDIxLjY4NC02Ljk2NWgxMy44MjN2MTIuNzk5aC0xMy41MzNjLTUuMjExIDAtOC4xNTMuNzc1LTEwLjk4NyAzLjUzOS0yLjQzNCAyLjUxNS00LjEwNCA3LjI3LTQuMTA0IDEzLjUzMSAwIDYuNCAxLjI3MiAxMS4wMTQgMy45MjYgMTQuMDI4IDIuMTk4IDIuMzY0IDYuMTkzIDMuMDgxIDkuOTUxIDMuMDgxaDYuNDEybDIwLjEyNC00Ni45NzdoMjEuMzk0bDI0LjE3NCA1Ni41di01Ni41aDIxLjc0bDI1LjA5OCA0MS42MDJ2LTQxLjYwMmgxNC42MjV2NTkuNzMzem0tNDcxLjYxNiAxMS43MzNoMjQuMzk1bDUuNTAxLTEzLjI2OGgxMi4zMTVsNS40ODYgMTMuMjY4aDQ4di0xMC4xNDRsNC4yODUgMTAuMTg3aDI0LjkxOGw0LjI4NS0xMC4zMzh2MTAuMjk1aDExOS4yODlsLS4wNTYtMjEuNzc5aDIuMzA4YzEuNjE2LjA1NiAyLjA4OC4yMDUgMi4wODggMi44NzR2MTguOTA2aDYxLjY5N3YtNS4wN2M0Ljk3NiAyLjY2NyAxMi43MTcgNS4wNyAyMi45MDIgNS4wN2gyNS45NTZsNS41NTUtMTMuMjY4aDEyLjMxNWw1LjQzMiAxMy4yNjhoNTAuMDE4di0xMi42MDNsNy41NzQgMTIuNjAzaDQwLjA4MXYtODMuMzEyaC0zOS42Njd2OS44MzlsLTUuNTU1LTkuODM5aC00MC43MDN2OS44MzlsLTUuMTAxLTkuODM5aC01NC45OGMtOS4yMDMgMC0xNy4yOTMgMS4yODUtMjMuODI4IDQuODY1di00Ljg2NWgtMzcuOTQxdjQuODY1Yy00LjE1OC0zLjY5LTkuODI1LTQuODY1LTE2LjEyNS00Ljg2NWgtMTM4LjYxM2wtOS4zMDEgMjEuNTE4LTkuNTUxLTIxLjUxOGgtNDMuNjZ2OS44MzlsLTQuNzk2LTkuODM5aC0zNy4yMzVsLTE3LjI5MSAzOS42MTF2NDMuNzAxaC4wMDJ6TTUxMiAzMDIuMDE0aC0yNi4wMzljLTIuNiAwLTQuMzI3LjA5Ny01Ljc4MiAxLjA4LTEuNTA3Ljk2OC0yLjA4OCAyLjQwNS0yLjA4OCA0LjMwMiAwIDIuMjU1IDEuMjczIDMuNzkgMy4xMjQgNC40NTMgMS41MDcuNTI1IDMuMTI2LjY3OCA1LjUwNi42NzhsNy43NDMuMjA3YzcuODE0LjE5MyAxMy4wMjkgMS41MzYgMTYuMjA5IDQuODEyLjU3OS40NTYuOTI3Ljk2OCAxLjMyNSAxLjQ4di0xNy4wMTJ6bTAgMzkuNDE2Yy0zLjQ3IDUuMDc1LTEwLjIzMyA3LjY0OC0xOS4zODggNy42NDhoLTI3LjU5MXYtMTIuODJoMjcuNDc5YzIuNzI2IDAgNC42MzMtLjM1OSA1Ljc4Mi0xLjQ4Ljk5NS0uOTI1IDEuNjg5LTIuMjY4IDEuNjg5LTMuOSAwLTEuNzQyLS42OTQtMy4xMjQtMS43NDUtMy45NTQtMS4wMzctLjkxMi0yLjU0Ni0xLjMyNy01LjAzNC0xLjMyNy0xMy40MTUtLjQ1Ni0zMC4xNTEuNDE1LTMwLjE1MS0xOC41MDQgMC04LjY3MiA1LjUwNi0xNy44IDIwLjQ5OC0xNy44aDI4LjQ1OHYtMTEuODk1aC0yNi40NDFjLTcuOTc5IDAtMTMuNzc2IDEuOTExLTE3Ljg4MSA0Ljg4MnYtNC44ODJoLTM5LjEwOWMtNi4yNTQgMC0xMy41OTUgMS41NS0xNy4wNjggNC44ODJ2LTQuODgyaC02OS44Mzl2NC44ODJjLTUuNTU4LTQuMDEtMTQuOTM3LTQuODgyLTE5LjI2NS00Ljg4MmgtNDYuMDY2djQuODgyYy00LjM5Ny00LjI1OC0xNC4xNzYtNC44ODItMjAuMTM2LTQuODgyaC01MS41NTZsLTExLjc5OCAxMi43NjgtMTEuMDUtMTIuNzY4aC03Ny4wMTR2ODMuNDIxaDc1LjU2NWwxMi4xNTctMTIuOTcgMTEuNDUyIDEyLjk3IDQ2LjU3OC4wNDF2LTE5LjYyNGg0LjU3OWM2LjE4LjA5NiAxMy40NjktLjE1MyAxOS45LTIuOTMzdjIyLjUxNGgzOC40MTl2LTIxLjc0MmgxLjg1M2MyLjM2NSAwIDIuNTk4LjA5NyAyLjU5OCAyLjQ2MXYxOS4yOGgxMTYuNzA5YzcuNDEgMCAxNS4xNTUtMS44OTcgMTkuNDQ0LTUuMzM4djUuMzM4aDM3LjAyYzcuNzA0IDAgMTUuMjI3LTEuMDggMjAuOTUxLTMuODQ1di0xNS41NDF6bS01Ni45OS0yMy44ODRjMi43ODIgMi44NzkgNC4yNzMgNi41MTQgNC4yNzMgMTIuNjY3IDAgMTIuODYyLTguMDM1IDE4Ljg2NS0yMi40NDQgMTguODY1aC0yNy44Mjd2LTEyLjgyaDI3LjcxNWMyLjcxIDAgNC42MzItLjM1OSA1LjgzNi0xLjQ4Ljk4My0uOTI1IDEuNjg3LTIuMjY4IDEuNjg3LTMuOSAwLTEuNzQyLS43NjMtMy4xMjQtMS43NDMtMy45NTQtMS4wOTMtLjkxMi0yLjYtMS4zMjctNS4wODgtMS4zMjctMTMuMzYxLS40NTYtMzAuMDkzLjQxNS0zMC4wOTMtMTguNTA0IDAtOC42NzIgNS40NDgtMTcuOCAyMC40MjYtMTcuOGgyOC42NDJ2MTIuNzI1aC0yNi4yMDhjLTIuNTk4IDAtNC4yODcuMDk3LTUuNzI0IDEuMDgtMS41NjUuOTY4LTIuMTQ1IDIuNDA1LTIuMTQ1IDQuMzAyIDAgMi4yNTUgMS4zMjkgMy43OSAzLjEyNiA0LjQ1MyAxLjUwNy41MjUgMy4xMjYuNjc4IDUuNTYuNjc4bDcuNjkxLjIwN2M3Ljc1Ni4xODkgMTMuMDggMS41MzEgMTYuMzE2IDQuODA4em0tMTI4LjkxOC0zLjY5MmMtMS45MTEgMS4xMzQtNC4yNzUgMS4yMzEtNy4wNTUgMS4yMzFoLTE3LjM1NnYtMTMuNDI4aDE3LjU5MmMyLjU0NCAwIDUuMDg5LjA1NCA2LjgxOCAxLjA4IDEuODUyLjk2OCAyLjk1OCAyLjgyIDIuOTU4IDUuMzc4IDAgMi41NTgtMS4xMDcgNC42MTktMi45NTggNS43Mzh6bTguNjI4IDcuNDRjMy4xOCAxLjE3NCA1Ljc4IDMuMjc4IDYuOTk5IDUuMDE5IDIuMDE3IDIuOTE5IDIuMzA5IDUuNjQzIDIuMzY3IDEwLjkxM3YxMS44NTJoLTE0LjM0M3YtNy40OGMwLTMuNTk3LjM0Ni04LjkyMi0yLjMwOS0xMS43MDItMi4wODgtMi4xNDItNS4yNy0yLjY1NC0xMC40ODItMi42NTRoLTE1LjI2OHYyMS44MzZoLTE0LjM1NnYtNTkuNzg2aDMyLjk4NWM3LjIzMyAwIDEyLjUwMS4zMTkgMTcuMTkgMi44MjEgNC41MDkgMi43MjQgNy4zNDUgNi40NTYgNy4zNDUgMTMuMjc2LS4wMDIgOS41NDItNi4zNjYgMTQuNDEyLTEwLjEyNyAxNS45MDV6bTE4LjA0OC0zMi4wMDJoNDcuNjg0djEyLjM2NGgtMzMuNDU1djEwLjg2OWgzMi42Mzl2MTIuMTk4aC0zMi42Mzl2MTEuODk1bDMzLjQ1NS4wNTR2MTIuNDA1aC00Ny42ODR2LTU5Ljc4NnptLTk2LjM5MyAyNy41OTFoLTE4LjQ2M3YtMTUuMjI1aDE4LjYyOWM1LjE1OCAwIDguNzM4IDIuMTAyIDguNzM4IDcuMzMgMCA1LjE3MS0zLjQxNSA3Ljg5NS04LjkwNCA3Ljg5NXptLTMyLjY5MyAyNi43NThsLTIxLjkzNS0yNC4zNTMgMjEuOTM1LTIzLjU3OXY0Ny45MzJ6bS01Ni42NDctNy4wMjJoLTM1LjEyN3YtMTEuODk1aDMxLjM2NnYtMTIuMTk4aC0zMS4zNjZ2LTEwLjg2OWgzNS44MTlsMTUuNjI3IDE3LjQyMy0xNi4zMTkgMTcuNTR6bTExMy41ODMtMjcuNjNjMCAxNi42MDgtMTIuMzkxIDIwLjAzNy0yNC44NzkgMjAuMDM3aC0xNy44Mjd2MjAuMDUzaC0yNy43NjlsLTE3LjU5Mi0xOS43OTItMTguMjgzIDE5Ljc5MmgtNTYuNTkxdi01OS43ODZoNTcuNDYybDE3LjU3OCAxOS41OTcgMTguMTczLTE5LjU5N2g0NS42NTJjMTEuMzM4IDAgMjQuMDc3IDMuMTM5IDI0LjA3NyAxOS42OTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+'",
  Dankort: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjMwOCIgdmlld0JveD0iMCAwIDUxMiAzMDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iI0Y1MDkxQSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM5RTBDMTciIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0zNTguNDA3IDBoLTIwNC43OTVjLTg0Ljg0MiAwLTE1My42MTIgNjguNzcxLTE1My42MTIgMTUzLjU5MyAwIDg0Ljg1MSA2OC43NyAxNTMuNjA2IDE1My42MTIgMTUzLjYwNmgyMDQuNzk1Yzg0LjgyMiAwIDE1My41OTMtNjguNzU1IDE1My41OTMtMTUzLjYwNiAwLTg0LjgyMS02OC43Ny0xNTMuNTkzLTE1My41OTMtMTUzLjU5MyIgZmlsbD0iI0ZFRkVGRSIvPjxwYXRoIGQ9Ik0zOTUuNTkxIDE0NC40ODZsNjguMzI4IDgxLjI2MWMxNC4xNTEtMjAuNDUxIDIyLjQ2Mi00NS4yNDIgMjIuNDYyLTcxLjk0NSAwLTI4LjE4My05LjI1OS01NC4yNDgtMjQuODg0LTc1LjMxNWwtNjUuOTA2IDY1Ljk5OXptLTI0MS4zOTctMTE3LjM4NmMtMzguNTQ3IDAtNzMuMTIxIDE3LjI5My05Ni4zODMgNDQuNTI4aDE0NC4xNTljNTEuMDI3IDAgODkuNDc0IDEyLjk4MyA5My40MzEgNTUuOTc0bDUzLjcwMi01NS45ODFoMTA2LjkzMWMtMjMuMjYzLTI3LjIyNy01Ny44MzEtNDQuNTItOTYuMzYxLTQ0LjUyaC0yMDUuNDc5em0yOS4yMzYgMjA1LjQ3OWgtMTI4LjQyOWMyMy4yMzMgMjkuMTkzIDU5LjA2MiA0Ny45NDYgOTkuMTk0IDQ3Ljk0NmgyMDUuNDc5YzQwLjExNyAwIDc1LjkzNy0xOC43NDUgOTkuMTcxLTQ3LjkzOWgtMTA5LjI5NWwtNTYuNzk2LTcxLjc3NmMtMTAuNTA2IDQ4LjkzOS00NC44ODEgNzEuNzY5LTEwOS4zMjMgNzEuNzY5ek0xMTguNDQgMTI1Ljk5N2wtMTguMjIyIDUwLjFoNzMuNTE3YzIxLjczMyAwIDI4LjMxLTguOTk4IDMzLjE3My0yNi4zMTkgNC44MTUtMTcuMTMxLTcuMjc3LTIzLjc4LTIyLjEyOS0yMy43OGgtNjYuMzM5eiIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg=='",
  DinersClub: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjEzNCIgdmlld0JveD0iMCAwIDUxMiAxMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxwYXRoIGQ9Ik05OS4yODUgMTMzLjg2YzM2LjQ0Ni4xNzcgNjkuNzE1LTI5LjY1OSA2OS43MTUtNjUuOTU1IDAtMzkuNjg5LTMzLjI2OS02Ny4xMjItNjkuNzE1LTY3LjExMWgtMzEuMzY1Yy0zNi44ODItLjAxMS02Ny4yNDEgMjcuNDI5LTY3LjI0MSA2Ny4xMTEgMCAzNi4zMDUgMzAuMzU4IDY2LjEzMyA2Ny4yNDEgNjUuOTU1aDMxLjM2NSIgZmlsbD0iIzAwNjA5NSIvPjxwYXRoIGQ9Ik04MS45MDkgMTAzLjI0N3YtNzIuMDcyYzE0LjUxNyA1LjU1NyAyNC44MjMgMTkuNTgzIDI0Ljg0NyAzNi4wMzMtLjAyNCAxNi40NTQtMTAuMzMgMzAuNDcxLTI0Ljg0NyAzNi4wMzhtLTUyLjUyMi0zNi4wMzhjLjAzMy0xNi40NDEgMTAuMzIyLTMwLjQ1OCAyNC44MzEtMzYuMDMydjcyLjA1NWMtMTQuNTA5LTUuNTY5LTI0Ljc5OC0xOS41NzgtMjQuODMxLTM2LjAyNG0zOC42NzktNjAuOTE1Yy0zMy43MDIuMDExLTYxLjAxMSAyNy4yNzMtNjEuMDIgNjAuOTE1LjAwOCAzMy42MzkgMjcuMzE4IDYwLjg5NSA2MS4wMiA2MC45MDUgMzMuNzEzLS4wMSA2MS4wMjgtMjcuMjY2IDYxLjAzMy02MC45MDUtLjAwNS0zMy42NDItMjcuMzE5LTYwLjkwNC02MS4wMzMtNjAuOTE1IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE5MC4zNzMgMjkuNDIxYzAtNi4yOTQtMy4yOTEtNS44ODEtNi40NDQtNS45NDd2LTEuODE5YzIuNzMzLjEzMyA1LjUzNi4xMzMgOC4yNzUuMTMzIDIuOTQzIDAgNi45NDEtLjEzMyAxMi4xMzMtLjEzMyAxOC4xNTcgMCAyOC4wNDIgMTIuMTAzIDI4LjA0MiAyNC40OTYgMCA2LjkyOS00LjA2MyAyNC4zNTMtMjguODg4IDI0LjM1My0zLjU3MyAwLTYuODc0LS4xMzgtMTAuMTY3LS4xMzgtMy4xNTMgMC02LjI0Mi4wNjctOS4zOTUuMTM4di0xLjgyYzQuMjAzLS40MjEgNi4yNDItLjU2MSA2LjQ0NC01LjMydi0zMy45NDN6bTYuODczIDMyLjgyNWMwIDUuMzg4IDMuODYxIDYuMDE3IDcuMjk0IDYuMDE3IDE1LjE0OSAwIDIwLjEyNC0xMS40MDcgMjAuMTI0LTIxLjgzNiAwLTEzLjA4My04LjQxNS0yMi41My0yMS45NDctMjIuNTMtMi44NzkgMC00LjIwMy4yMDUtNS40NzIuMjh2MzguMDY4em0zNy41OTIgNi40NGgxLjMzMWMxLjk2MSAwIDMuMzY1IDAgMy4zNjUtMi4zMTV2LTE4Ljk2MmMwLTMuMDc3LTEuMDUtMy41MDQtMy42NDgtNC44OTZ2LTEuMTIyYzMuMjk2LS45ODUgNy4yMjYtMi4zMDggNy41MDMtMi41MTguNDkzLS4yOC45MTItLjM1NCAxLjI2NC0uMzU0LjM0NyAwIC40OTIuNDIxLjQ5Mi45ODV2MjYuODY2YzAgMi4zMTUgMS41NDIgMi4zMTUgMy41MDggMi4zMTVoMS4xODl2MS44MmMtMi4zODYgMC00Ljg0Mi0uMTQtNy4zNi0uMTQtMi41MjYgMC01LjA1Mi4wNjgtNy42NDMuMTR2LTEuODJ6bTcuNTAzLTQwLjk0Yy0xLjgyNyAwLTMuNDM2LTEuNjc5LTMuNDM2LTMuNDk5IDAtMS43NTIgMS42ODYtMy4zNjYgMy40MzYtMy4zNjYgMS44MTcgMCAzLjQzNSAxLjQ3NiAzLjQzNSAzLjM2NiAwIDEuODkyLTEuNTQ2IDMuNDk5LTMuNDM1IDMuNDk5em0xNC4xNjIgMjAuMDgyYzAtMi41ODgtLjc3NS0zLjI4NS00LjA2My00LjYxNXYtMS4zM2MzLjAxMS0uOTc4IDUuODg0LTEuODkyIDkuMjU0LTMuMzYzLjIwOCAwIC40MTQuMTQzLjQxNC42OTl2NC41NTFjNC4wMDMtMi44NjYgNy40NDEtNS4yNSAxMi4xNDQtNS4yNSA1Ljk1NiAwIDguMDU4IDQuMzQgOC4wNTggOS44djE4LjA1MmMwIDIuMzE1IDEuNTQxIDIuMzE1IDMuNTA2IDIuMzE1aDEuMjYydjEuODJjLTIuNDU5IDAtNC45MTMtLjE0LTcuNDMxLS4xNC0yLjUyOCAwLTUuMDUzLjA2OC03LjU3Ni4xNHYtMS44MmgxLjI2MWMxLjk2NyAwIDMuMzYzIDAgMy4zNjMtMi4zMTV2LTE4LjEyYzAtMy45OTQtMi40NDMtNS45NDktNi40NDYtNS45NDktMi4yNDMgMC01LjgxOSAxLjgxNy04LjE0MSAzLjM1OHYyMC43MTFjMCAyLjMxNSAxLjU1MiAyLjMxNSAzLjUxNiAyLjMxNWgxLjI2MXYxLjgyYy0yLjQ1NCAwLTQuOTEyLS4xNC03LjQzNi0uMTQtMi41MjEgMC01LjA1LjA2OC03LjU3MS4xNHYtMS44MmgxLjI2NWMxLjk2MiAwIDMuMzYxIDAgMy4zNjEtMi4zMTV2LTE4LjU0NHptMzUuOTA3IDMuMzY1Yy0uMTQ1LjYzMS0uMTQ1IDEuNjc3IDAgNC4wNTkuNDEyIDYuNjQ2IDQuNzAyIDEyLjEwMyAxMC4zMDIgMTIuMTAzIDMuODYzIDAgNi44ODItMi4xIDkuNDctNC42ODZsLjk4Ljk4Yy0zLjIyNiA0LjI3LTcuMjI0IDcuOTA4LTEyLjk2OCA3LjkwOC0xMS4xNTQgMC0xMy4zOTUtMTAuNzgtMTMuMzk1LTE1LjI1NiAwLTEzLjcxOCA5LjI1Mi0xNy43NzkgMTQuMTU3LTE3Ljc3OSA1LjY4NSAwIDExLjc5MSAzLjU2OCAxMS44NTMgMTAuOTg2IDAgLjQyNiAwIC44NC0uMDYyIDEuMjY1bC0uNjM3LjQyMWgtMTkuNzAxem0xMi40MTMtMi4yNDFjMS43NTIgMCAxLjk1Ni0uOTEyIDEuOTU2LTEuNzUxIDAtMy41NjgtMi4xNzEtNi40MzctNi4xMDEtNi40MzctNC4yNzUgMC03LjIxOSAzLjE0Mi04LjA2IDguMTg3aDEyLjIwNXptOS42MDQgMTkuNzM2aDEuODk0YzEuOTU2IDAgMy4zNiAwIDMuMzYtMi4zMTV2LTE5LjY2MWMwLTIuMTY4LTIuNTkxLTIuNTkxLTMuNjQ1LTMuMTV2LTEuMDQ3YzUuMTE5LTIuMTcyIDcuOTI1LTMuOTk0IDguNTY1LTMuOTk0LjQxMiAwIC42Mi4yMS42Mi45MTN2Ni4yOTdoLjE1YzEuNzQ2LTIuNzI5IDQuNjk3LTcuMjEgOC45NzItNy4yMSAxLjc1NCAwIDMuOTk1IDEuMTg4IDMuOTk1IDMuNzA5IDAgMS44OS0xLjMyOSAzLjU3NC0zLjI5MSAzLjU3NC0yLjE4MiAwLTIuMTgyLTEuNjg0LTQuNjMzLTEuNjg0LTEuMTk0IDAtNS4xMTkgMS42MTEtNS4xMTkgNS44MTJ2MTYuNDM5YzAgMi4zMTUgMS4zOTkgMi4zMTUgMy4zNjUgMi4zMTVoMy45MjV2MS44MmMtMy44NTgtLjA3Mi02Ljc5My0uMTQtOS44MTItLjE0LTIuODc0IDAtNS44MjEuMDY4LTguMzQ1LjE0di0xLjgyem0yNi45OTUtNy45MTFjLjkxNCA0LjYxOCAzLjcxNiA4LjU0IDguODM4IDguNTQgNC4xMyAwIDUuNjcyLTIuNTE5IDUuNjcyLTQuOTY3IDAtOC4yNi0xNS4yODEtNS42MDMtMTUuMjgxLTE2Ljg2NyAwLTMuOTIyIDMuMTU5LTguOTYxIDEwLjg2OS04Ljk2MSAyLjI0MSAwIDUuMjU1LjYzMiA3Ljk4OCAyLjAzM2wuNDk1IDcuMTMyaC0xLjYxNGMtLjctNC40MDUtMy4xNTMtNi45MjQtNy42NDMtNi45MjQtMi44MDggMC01LjQ2OSAxLjYwOS01LjQ2OSA0LjYxOCAwIDguMTk0IDE2LjI2OCA1LjY2OSAxNi4yNjggMTYuNjU1IDAgNC42MTgtMy43MTYgOS41MjItMTIuMDYzIDkuNTIyLTIuODA0IDAtNi4xMDEtLjk4Mi04LjU1Mi0yLjM4bC0uNzc0LTguMDQ5IDEuMjY0LS4zNTN6bTgzLjQ0Mi0yNi40NTVoLTEuNzQ5Yy0xLjMzNS04LjE4Mi03LjE1Ni0xMS40NzUtMTUuMDA2LTExLjQ3NS04LjA2OCAwLTE5Ljc4MSA1LjM4Ny0xOS43ODEgMjIuMTgyIDAgMTQuMTQ0IDEwLjEwNSAyNC4yODggMjAuOSAyNC4yODggNi45MzkgMCAxMi42OTUtNC43NTggMTQuMDk5LTEyLjEwOWwxLjYwOS40MTktMS42MDkgMTAuMjE3Yy0yLjk0NiAxLjgyNS0xMC44NzEgMy43MTItMTUuNTAyIDMuNzEyLTE2LjQwMyAwLTI2Ljc3OS0xMC41NjgtMjYuNzc5LTI2LjMxNSAwLTE0LjM0NyAxMi44MjgtMjQuNjM4IDI2LjU3Mi0yNC42MzggNS42NzcgMCAxMS4xNDkgMS44MjUgMTYuNTQ2IDMuNzE2bC43IDEwLjAwM3ptMi41MjkgMzQuMzY2aDEuMzI2YzEuOTY5IDAgMy4zNzMgMCAzLjM3My0yLjMxNXYtMzguOTc0YzAtNC41NTMtMS4wNTItNC42OTMtMy43MTYtNS40NjF2LTEuMTJjMi44MDMtLjkwOSA1Ljc0OS0yLjE2OCA3LjIyMS0zLjAxMi43NjUtLjQxNiAxLjMzMS0uNzcyIDEuNTM3LS43NzIuNDI3IDAgLjU2OC40MjQuNTY4Ljk4NXY0OC4zNTRjMCAyLjMxNSAxLjU0MSAyLjMxNSAzLjUwNiAyLjMxNWgxLjE4NHYxLjgyYy0yLjM3NiAwLTQuODMyLS4xNC03LjM1Ni0uMTQtMi41MjMgMC01LjA0Ny4wNjgtNy42NDMuMTR2LTEuODJ6bTQ1LjAyMi0yLjAzM2MwIDEuMjY1Ljc2OSAxLjMzMSAxLjk1OSAxLjMzMWwyLjgwNi0uMDY3djEuNDczYy0zLjAxOS4yNzgtOC43NjcgMS43NDctMTAuMSAyLjE2N2wtLjM1My0uMjExdi01LjY2NmMtNC4yIDMuNDI4LTcuNDMxIDUuODc3LTEyLjQxNSA1Ljg3Ny0zLjc4MyAwLTcuNzEtMi40NDktNy43MS04LjMyNXYtMTcuOTJjMC0xLjgyLS4yNzgtMy41NzEtNC4yMDItMy45MTl2LTEuMzMxYzIuNTI4LS4wNjggOC4xMjgtLjQ4OCA5LjA0My0uNDg4Ljc3NyAwIC43NzcuNDg4Ljc3NyAyLjAyOHYxOC4wNTJjMCAyLjEwMyAwIDguMTIgNi4wOTYgOC4xMiAyLjM4NCAwIDUuNTM5LTEuODE5IDguNDgtNC4yNjN2LTE4LjgzM2MwLTEuMzk2LTMuMzYzLTIuMTYzLTUuODgyLTIuODY0di0xLjI2YzYuMzA0LS40MjMgMTAuMjM3LS45OCAxMC45MzQtLjk4LjU2NyAwIC41NjcuNDg4LjU2NyAxLjI2MXYyNS44MTh6bTEzLjk1Mi0yMy4wOTJjMi44MDEtMi4zOCA2LjU4OS01LjA0IDEwLjQ0OS01LjA0IDguMTM1IDAgMTMuMDM3IDcuMDc0IDEzLjAzNyAxNC42OTggMCA5LjE2Ny02LjcyOCAxOC4zMzgtMTYuNzYxIDE4LjMzOC01LjE4NCAwLTcuOTE4LTEuNjgyLTkuNzQ0LTIuNDQ5bC0yLjEwMSAxLjYwNi0xLjQ2Ny0uNzY3Yy42Mi00LjEyOS45NzktOC4xODkuOTc5LTEyLjQ1N3YtMzAuMDkxYzAtNC41NTMtMS4wNTctNC42OTMtMy43Mi01LjQ2MXYtMS4xMmMyLjgxMS0uOTA5IDUuNzQ5LTIuMTY4IDcuMjI0LTMuMDEyLjc3LS40MTYgMS4zMjctLjc3MiAxLjU0Ni0uNzcyLjQyIDAgLjU1OS40MjQuNTU5Ljk4NXYyNS41NDN6bTAgMTkuMDMzYzAgMi42NTkgMi41MjMgNy4xNDQgNy4yMjEgNy4xNDQgNy41MDQgMCAxMC42NTctNy4zNTIgMTAuNjU3LTEzLjU4MyAwLTcuNTU2LTUuNzQ0LTEzLjg1Mi0xMS4yMTYtMTMuODUyLTIuNjAxIDAtNC43NyAxLjY4MS02LjY2MyAzLjI5MXYxN3ptLTMwMi41MTggNDguNjAxaC41MzdjMS4zNzEgMCAyLjgyMS0uMTg1IDIuODIxLTIuMTY4di0xOS45NDhjMC0xLjk4Ni0xLjQ0OS0yLjE3NS0yLjgyMS0yLjE3NWgtLjUzN3YtMS4xNDNjMS40ODkgMCAzLjc3OC4xNSA1LjY1My4xNSAxLjkwNSAwIDQuMTkyLS4xNSA1Ljk4NS0uMTV2MS4xNDNoLS41MzZjLTEuMzY4IDAtMi44MjEuMTg5LTIuODIxIDIuMTc1djE5Ljk0OGMwIDEuOTgzIDEuNDUzIDIuMTY4IDIuODIxIDIuMTY4aC41MzZ2MS4xNDhjLTEuODMxIDAtNC4xMjUtLjE1LTYuMDI2LS4xNS0xLjg3MSAwLTQuMTI0LjE1LTUuNjEyLjE1di0xLjE0OHptMzcuODUxLTYuMzU5bC4wNzctLjA3NXYtMTQuMjc3YzAtMy4xMjQtMi4xNzctMy41ODEtMy4zMjEtMy41ODFoLS44NHYtMS4xNDNsNS4zNDIuMTUxIDQuNjk0LS4xNTF2MS4xNDNoLS41NjhjLTEuNjA3IDAtMy40LjMwNi0zLjQgNC44MzZ2MTcuMzNjMCAxLjMzMS4wMzkgMi42NjIuMjI2IDMuODQyaC0xLjQ0OWwtMTkuNjQ3LTIxLjg2djE1LjY5MmMwIDMuMzEzLjY0MyA0LjQ1MiAzLjU4NSA0LjQ1MmguNjQ3djEuMTQ4bC00LjkyLS4xNS01LjE4Ny4xNXYtMS4xNDhoLjUzNGMyLjYzMiAwIDMuNDMxLTEuNzg2IDMuNDMxLTQuODI5di0xNi4wMzljMC0yLjEyOS0xLjc1OS0zLjQyMy0zLjQ2OS0zLjQyM2gtLjQ5N3YtMS4xNDNsNC4zODMuMTUxIDMuMzk5LS4xNTEgMTYuOTgzIDE5LjA3NnptMTEuNjY2LTE3LjE3MmMtMi44NjYgMC0yLjk3NC42ODYtMy41NDcgMy40NjJoLTEuMTQzYy4xNDgtMS4wNjUuMzQyLTIuMTI5LjQ1OC0zLjIzNi4xNTUtMS4wNjguMjI4LTIuMTI5LjIyOC0zLjIzM2guOTE1Yy4zMDggMS4xNDQgMS4yNjEgMS4xMDQgMi4yOTYgMS4xMDRoMTkuNjgxYzEuMDMzIDAgMS45ODQtLjAzNyAyLjA2My0xLjE4MmwuOTEuMTUzYy0uMTQ4IDEuMDI5LS4zMDMgMi4wNTUtLjQxOSAzLjA4NS0uMDcgMS4wMjktLjA3IDIuMDU4LS4wNyAzLjA4M2wtMS4xNDcuNDIzYy0uMDc4LTEuNDA4LS4yNy0zLjY1OS0yLjgyNC0zLjY1OWgtNi4yNTd2MjAuMjU5YzAgMi45MzcgMS4zMzcgMy4yNzIgMy4xNjQgMy4yNzJoLjcyNXYxLjE0OGMtMS40ODcgMC00LjE1OS0uMTUtNi4yMTYtLjE1LTIuMjkgMC00Ljk2Mi4xNS02LjQ1Mi4xNXYtMS4xNDhoLjcyNWMyLjEwNiAwIDMuMTY4LS4xODcgMy4xNjgtMy4xOTJ2LTIwLjMzOWgtNi4yNTl6bTIzLjA4MiAyMy41MzFoLjUzNmMxLjM3MyAwIDIuODI0LS4xODUgMi44MjQtMi4xNjh2LTE5Ljk0OGMwLTEuOTg2LTEuNDUxLTIuMTc1LTIuODI0LTIuMTc1aC0uNTM2di0xLjE0M2MyLjMyMiAwIDYuMjk5LjE1IDkuNDk4LjE1IDMuMjEgMCA3LjE3Mi0uMTUgOS43NjUtLjE1LS4wNjUgMS42MzUtLjAyOCA0LjE1My4wODMgNS44MjdsLTEuMTUuMzA2Yy0uMTg0LTIuNDc0LS42NC00LjQ1NC00LjY1LTQuNDU0aC01LjI5OHY5Ljk3M2g0LjUzNGMyLjI4OCAwIDIuNzg4LTEuMjkxIDMuMDE0LTMuMzUyaDEuMTQyYy0uMDc1IDEuNDg5LS4xMTQgMi45NzMtLjExNCA0LjQ1NSAwIDEuNDUxLjAzOSAyLjg5Ni4xMTQgNC4zNDNsLTEuMTQyLjIyNmMtLjIyNi0yLjI4Mi0uMzQyLTMuNzY4LTIuOTc5LTMuNzY4aC00LjU3djguODcxYzAgMi40NzUgMi4yMDMgMi40NzUgNC42NDYgMi40NzUgNC41ODEgMCA2LjYwMS0uMzA3IDcuNzQ3LTQuNjQybDEuMDY3LjI2MmMtLjQ5OCAyLjAyNC0uOTU0IDQuMDM2LTEuMjkzIDYuMDU4LTIuNDQ2IDAtNi44MzQtLjE1LTEwLjI2My0uMTUtMy40MzggMC03Ljk3OC4xNS0xMC4xNTMuMTV2LTEuMTQ4em0yNi44NTktMjEuNGMwLTIuNzc4LTEuNTI2LTIuODkyLTIuNzEyLTIuODkyaC0uNjg3di0xLjE0NGMxLjIyMSAwIDMuNTg2LjE1MyA1LjkxNS4xNTMgMi4yODcgMCA0LjEyLS4xNTMgNi4xNDEtLjE1MyA0LjgwNCAwIDkuMDgzIDEuMjk0IDkuMDgzIDYuNzA2IDAgMy40MjEtMi4yODggNS41MTctNS4zMDMgNi43MDNsNi41MjIgOS43NDFjMS4wNyAxLjYxMSAxLjgyOSAyLjA2MyAzLjcwMiAyLjI4NHYxLjE0OWwtMy43MzktLjE1LTMuNTg0LjE1Yy0yLjkzOC0zLjg0Ni01LjQ2Mi03Ljk1OC03LjkzOS0xMi4zNDNoLTIuNTEzdjguMTUzYzAgMi45MzUgMS4zNyAzLjA0MSAzLjEyMiAzLjA0MWguNjg5djEuMTQ5bC02LjU2Mi0uMTVjLTEuODM0IDAtMy42MjcuMTUtNS41MzQuMTV2LTEuMTQ5aC42ODdjMS40MTcgMCAyLjcxMi0uNjM5IDIuNzEyLTIuMDV2LTE5LjM0OXptNC44ODYgOC44MzJoMS44NjNjMy44MTkgMCA1Ljg3NC0xLjQ0MyA1Ljg3NC01LjkzOSAwLTMuMzg0LTIuMTczLTUuNTU2LTUuNTcxLTUuNTU2LTEuMTQ3IDAtMS42MzUuMTE3LTIuMTY2LjE1MXYxMS4zNDR6bTQzLjY4IDYuMjA5bC4wNjgtLjA3NXYtMTQuMjc3YzAtMy4xMjQtMi4xNzEtMy41ODEtMy4zMTQtMy41ODFoLS44Mzd2LTEuMTQzbDUuMzQuMTUxIDQuNy0uMTUxdjEuMTQzaC0uNTc3Yy0xLjYwMSAwLTMuMzk2LjMwNi0zLjM5NiA0LjgzNnYxNy4zM2MwIDEuMzMxLjAzNiAyLjY2Mi4yMjUgMy44NDJoLTEuNDQ2bC0xOS42NDktMjEuODZ2MTUuNjkyYzAgMy4zMTMuNjQ3IDQuNDUyIDMuNTg0IDQuNDUyaC42NDh2MS4xNDhsLTQuOTE4LS4xNS01LjE5Mi4xNXYtMS4xNDhoLjUyOWMyLjYzNyAwIDMuNDM4LTEuNzg2IDMuNDM4LTQuODI5di0xNi4wMzljMC0yLjEyOS0xLjc1Ni0zLjQyMy0zLjQ3LTMuNDIzaC0uNDk3di0xLjE0M2w0LjM4OS4xNTEgMy4zOTQtLjE1MSAxNi45OCAxOS4wNzZ6bTEyLjA5MiAyLjA2MWMtLjM4OCAxLjI5Mi0uODQ3IDIuMjg5LS44NDcgMi45NjggMCAxLjE0NCAxLjYwNCAxLjMzIDIuODYgMS4zM2guNDI3djEuMTQ4Yy0xLjUyOS0uMDgzLTMuMDg4LS4xNDgtNC42MjUtLjE0OC0xLjM3MSAwLTIuNzM2LjA2NS00LjExNS4xNDh2LTEuMTQ4aC4yMzFjMS40ODcgMCAyLjc0OS0uODc0IDMuMzEzLTIuNDc3bDYuMTEyLTE3LjQ3MWMuNDktMS40MDkgMS4xODQtMy4zMTQgMS40MTQtNC43MjggMS4yMTUtLjQxMyAyLjc0NC0xLjE3NCAzLjQ2OS0xLjYzMi4xMTctLjA0MS4xODQtLjA4LjMwNS0uMDguMTE0IDAgLjE4NCAwIC4yNy4xMTcuMTE0LjMwNC4yMjEuNjQ3LjM0NS45NTFsNy4wMTkgMTkuOTE4Yy40NTYgMS4zMzEuOTEgMi43MzkgMS40MDQgMy44ODYuNDYzIDEuMDY2IDEuMjY0IDEuNTE2IDIuNTI0IDEuNTE2aC4yMjh2MS4xNDhjLTEuNzE3LS4wODMtMy40MzYtLjE0OC01LjI2NC0uMTQ4LTEuODY4IDAtMy43ODIuMDY1LTUuNzI4LjE0OHYtMS4xNDhoLjQyM2MuODczIDAgMi4zNjYtLjE0OCAyLjM2Ni0xLjEwMiAwLS40OTItLjM0NC0xLjUyLS43Ny0yLjc0MmwtMS40ODQtNC40MTZoLTguNjYxbC0xLjIxNyAzLjk2M3ptNS41NjgtMTYuODcyaC0uMDc4bC0zLjU0OSAxMC43NzhoNy4xM2wtMy41MDMtMTAuNzc4em0xNi40NDQtMi4zNjJjLTIuODYzIDAtMi45NzcuNjg2LTMuNTUgMy40NjJoLTEuMTQ3Yy4xNS0xLjA2NS4zNDQtMi4xMjkuNDYzLTMuMjM2LjE1MS0xLjA2OC4yMjMtMi4xMjkuMjIzLTMuMjMzaC45MmMuMzAzIDEuMTQ0IDEuMjYxIDEuMTA0IDIuMjg3IDEuMTA0aDE5LjY5MWMxLjAyNiAwIDEuOTc5LS4wMzcgMi4wNTctMS4xODJsLjkxNC4xNTNjLS4xNDcgMS4wMjktLjMgMi4wNTUtLjQxNCAzLjA4NS0uMDg1IDEuMDI5LS4wODUgMi4wNTgtLjA4NSAzLjA4M2wtMS4xNDIuNDIzYy0uMDctMS40MDgtLjI2Mi0zLjY1OS0yLjgxOS0zLjY1OWgtNi4yNTl2MjAuMjU5YzAgMi45MzcgMS4zMzkgMy4yNzIgMy4xNjYgMy4yNzJoLjcyNnYxLjE0OGMtMS40ODkgMC00LjE1OC0uMTUtNi4yMi0uMTUtMi4yODUgMC00Ljk2Mi4xNS02LjQ0OS4xNXYtMS4xNDhoLjcyNWMyLjEwMiAwIDMuMTY5LS4xODcgMy4xNjktMy4xOTJ2LTIwLjMzOWgtNi4yNTd6bTIzLjI2NCAyMy41MzFoLjUzNGMxLjM3OCAwIDIuODIxLS4xODUgMi44MjEtMi4xNjh2LTE5Ljk0OGMwLTEuOTg2LTEuNDQzLTIuMTc1LTIuODIxLTIuMTc1aC0uNTM0di0xLjE0M2MxLjQ5MiAwIDMuNzc3LjE1IDUuNjQzLjE1IDEuOTE0IDAgNC4yMDItLjE1IDUuOTk4LS4xNXYxLjE0M2gtLjUzNGMtMS4zNzYgMC0yLjgyOS4xODktMi44MjkgMi4xNzV2MTkuOTQ4YzAgMS45ODMgMS40NTMgMi4xNjggMi44MjkgMi4xNjhoLjUzNHYxLjE0OGMtMS44MzQgMC00LjEyNC0uMTUtNi4wMjktLjE1LTEuODczIDAtNC4xMi4xNS01LjYxMi4xNXYtMS4xNDh6bTI2Ljg1Ny0yNi4wMDNjOC4xMzUgMCAxNC42MTYgNS4wMjkgMTQuNjE2IDEzLjE0IDAgOC43NTktNi4yOTYgMTQuNTgxLTE0LjQxOSAxNC41ODEtOC4wOTYgMC0xNC4yNzMtNS40ODItMTQuMjczLTEzLjY3IDAtNy45MTkgNi4xNDEtMTQuMDUyIDE0LjA3Ni0xNC4wNTJ6bS41NzcgMjYuMDQ1YzcuNDA0IDAgOC42OTItNi41MTYgOC42OTItMTIuMDY3IDAtNS41NjktMy4wMDUtMTIuMzA2LTkuMzQyLTEyLjMwNi02LjY3OSAwLTguNjYxIDUuOTQyLTguNjYxIDExLjA0IDAgNi44MTcgMy4xMjggMTMuMzMzIDkuMzExIDEzLjMzM3ptMzkuNzUtNi40MDFsLjA3OC0uMDc1di0xNC4yNzdjMC0zLjEyNC0yLjE4MS0zLjU4MS0zLjMyNi0zLjU4MWgtLjgyN3YtMS4xNDNsNS4zMy4xNTEgNC43MDItLjE1MXYxLjE0M2gtLjU3N2MtMS41OTkgMC0zLjM5Ni4zMDYtMy4zOTYgNC44MzZ2MTcuMzNjMCAxLjMzMS4wMzYgMi42NjIuMjMgMy44NDJoLTEuNDQ4bC0xOS42NTQtMjEuODZ2MTUuNjkyYzAgMy4zMTMuNjUgNC40NTIgMy41ODQgNC40NTJoLjY1MXYxLjE0OGwtNC45Mi0uMTUtNS4xOTUuMTV2LTEuMTQ4aC41MzljMi42MzcgMCAzLjQzLTEuNzg2IDMuNDMtNC44Mjl2LTE2LjAzOWMwLTIuMTI5LTEuNzQ2LTMuNDIzLTMuNDctMy40MjNoLS40OTh2LTEuMTQzbDQuMzg5LjE1MSAzLjM5Ni0uMTUxIDE2Ljk4MSAxOS4wNzZ6bTEyLjA4NyAyLjA2MWMtLjM3NSAxLjI5Mi0uODM3IDIuMjg5LS44MzcgMi45NjggMCAxLjE0NCAxLjYwNyAxLjMzIDIuODU4IDEuMzNoLjQyN3YxLjE0OGMtMS41MjgtLjA4My0zLjA5NC0uMTQ4LTQuNjItLjE0OC0xLjM3OCAwLTIuNzQ2LjA2NS00LjExNC4xNDh2LTEuMTQ4aC4yMTdjMS40OTMgMCAyLjc1Ny0uODc0IDMuMzIxLTIuNDc3bDYuMTE0LTE3LjQ3MWMuNDkzLTEuNDA5IDEuMTg0LTMuMzE0IDEuNDA1LTQuNzI4IDEuMjIzLS40MTMgMi43NDctMS4xNzQgMy40NzktMS42MzIuMTA5LS4wNDEuMTg2LS4wOC4zMDEtLjA4LjExNCAwIC4xODcgMCAuMjY0LjExN2wuMzQ5Ljk1MSA3LjAxNiAxOS45MThjLjQ1OCAxLjMzMS45MTQgMi43MzkgMS40MTUgMy44ODYuNDU4IDEuMDY2IDEuMjYyIDEuNTE2IDIuNTE4IDEuNTE2aC4yMzN2MS4xNDhjLTEuNzItLjA4My0zLjQzOC0uMTQ4LTUuMjcyLS4xNDgtMS44NjUgMC0zLjc3Ny4wNjUtNS43MjMuMTQ4di0xLjE0OGguNDIyYy44NzEgMCAyLjM3LS4xNDggMi4zNy0xLjEwMiAwLS40OTItLjM0Ny0xLjUyLS43NzItMi43NDJsLTEuNDgyLTQuNDE2aC04LjY2MmwtMS4yMjUgMy45NjN6bTUuNTc2LTE2Ljg3MmgtLjA3N2wtMy41NTQgMTAuNzc4aDcuMTQxbC0zLjUxMS0xMC43Nzh6bTI0LjM4MSAxOC41ODNjMCAxLjUyNiAxLjA2IDEuOTggMi4yODIgMi4xMzYgMS41NjUuMTE1IDMuMjgyLjExNSA1LjA0Mi0uMDc4IDEuNTk5LS4xOTIgMi45NzItMS4xMDQgMy42NTgtMi4wNTguNjA5LS44MzkuOTUxLTEuOTAzIDEuMTg0LTIuNzQyaDEuMTA2Yy0uNDE5IDIuMTctLjk1NCA0LjMwNy0xLjQxNSA2LjQ3NmwtMTAuMDY2LS4xNDgtMTAuMDc0LjE0OHYtMS4xNDhoLjUyNmMxLjM3OSAwIDIuODcxLS4xODUgMi44NzEtMi41NDl2LTE5LjU3YzAtMS45ODUtMS40OTItMi4xNzMtMi44NzEtMi4xNzNoLS41MjZ2LTEuMTQzbDYuMDI0LjE1MSA1LjgwNC0uMTUxdjEuMTQzaC0uOTU5Yy0xLjQ0NiAwLTIuNTg1LjA0Mi0yLjU4NSAyLjA1NnYxOS42NDl6IiBmaWxsPSIjMUExOTE4Ii8+PC9zdmc+'",
  Discover: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9Ijg2IiB2aWV3Qm94PSIwIDAgNTEyIDg2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyMC40NDIlIiB5MT0iMTAuNTk5JSIgeDI9Ijg5LjI0NSUiIHkyPSI4My41MyUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRTI1NDI5IiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y5OUQzRSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMjcwLjM1Ni4zNjVjLTIzLjk4MiAwLTQzLjQ0IDE4LjczNS00My40NCA0MS44NTggMCAyNC41ODMgMTguNjEyIDQyLjk2IDQzLjQ0IDQyLjk2IDI0LjIwOCAwIDQzLjMyMS0xOC42MiA0My4zMjEtNDIuNDc4IDAtMjMuNzE2LTE4Ljk4Ni00Mi4zNC00My4zMjEtNDIuMzR6IiBpZD0iYiIvPjxmaWx0ZXIgeD0iLTUwJSIgeT0iLTUwJSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYyI+PGZlTW9ycGhvbG9neSByYWRpdXM9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dTcHJlYWRJbm5lcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyLjUiIGluPSJzaGFkb3dTcHJlYWRJbm5lcjEiIHJlc3VsdD0ic2hhZG93Qmx1cklubmVyMSIvPjxmZU9mZnNldCBkeD0iMiIgZHk9IjIiIGluPSJzaGFkb3dCbHVySW5uZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldElubmVyMSIvPjxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4zMDE2NTg3NDEgMCIgaW49InNoYWRvd0lubmVySW5uZXIxIi8+PC9maWx0ZXI+PC9kZWZzPjx1c2UgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsdGVyPSJ1cmwoI2MpIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGQ9Ik0yMy43NDYgMS44OTFoLTIzLjM1M3Y4MS40NTRoMjMuMjMyYzEyLjMyNSAwIDIxLjI0LTIuOTIxIDI5LjA1OS05LjM5OCA5LjI3OC03LjY5NSAxNC43ODEtMTkuMjk4IDE0Ljc4MS0zMS4yODkgMC0yNC4wNDgtMTcuOTY1LTQwLjc2Ni00My43MTktNDAuNzY2em0xOC41NzMgNjEuMTc2Yy01LjAyMiA0LjUzMS0xMS40ODYgNi40ODgtMjEuNzYgNi40ODhoLTQuMjY4di01My44NzNoNC4yNjhjMTAuMjc0IDAgMTYuNDkxIDEuODM0IDIxLjc2IDYuNTkzIDUuNDk1IDQuODg2IDguNzcyIDEyLjQ1MiA4Ljc3MiAyMC4yNjUgMCA3LjgyOS0zLjI3NyAxNS42Ni04Ljc3MiAyMC41Mjd6bTMyLjQ4IDIwLjI3OGgxNS44NzF2LTgxLjQ1NGgtMTUuODcxdjgxLjQ1NHptNTQuNzI3LTUwLjIwOWMtOS41MzktMy41MzQtMTIuMzQ2LTUuODY1LTEyLjM0Ni0xMC4yNDcgMC01LjEzNCA0Ljk5OC05LjAzOSAxMS44NDktOS4wMzkgNC43NjMgMCA4LjY3MSAxLjk1MyAxMi44MzYgNi41OGw4LjI5NC0xMC44NTJjLTYuODM5LTUuOTk4LTE1LjAyMS05LjA0Ny0yMy45NDYtOS4wNDctMTQuMzk4IDAtMjUuMzk5IDEwLjAyLTI1LjM5OSAyMy4zMiAwIDExLjI0NyA1LjEyNiAxNi45ODEgMjAuMDMxIDIyLjM2OSA2LjIzMyAyLjE4OCA5LjQwMSAzLjY0NiAxMC45OTMgNC42NDMgMy4xNzUgMi4wNzcgNC43NjkgNC45OTggNC43NjkgOC40MTYgMCA2LjYwNS01LjI1NyAxMS40ODMtMTIuMzUxIDExLjQ4My03LjU3NCAwLTEzLjY3NC0zLjc4Mi0xNy4zNDEtMTAuODY1bC0xMC4yNDcgOS45MDVjNy4zMTMgMTAuNzMzIDE2LjEwOSAxNS41MTEgMjguMjE0IDE1LjUxMSAxNi40ODggMCAyOC4wODQtMTEuMDA3IDI4LjA4NC0yNi43NTggMC0xMi45NDgtNS4zNjEtMTguODE1LTIzLjQ0My0yNS40MTl6bTI4LjQ0OSA5LjUyMWMwIDIzLjk2NSAxOC44MTUgNDIuNTI1IDQzLjAwNiA0Mi41MjUgNi44MzkgMCAxMi43MDEtMS4zNTIgMTkuOTE1LTQuNzU4di0xOC42OTdjLTYuMzYxIDYuMzU4LTExLjk4IDguOTE2LTE5LjE4OSA4LjkxNi0xNS45OTcgMC0yNy4zNjQtMTEuNjA2LTI3LjM2NC0yOC4xMDIgMC0xNS42MjYgMTEuNzIxLTI3Ljk2NSAyNi42MzgtMjcuOTY1IDcuNTYxIDAgMTMuMzExIDIuNjg2IDE5LjkxNSA5LjE1OXYtMTguNjk2Yy02Ljk2Mi0zLjUzMS0xMi43MTItNC45ODUtMTkuNTUyLTQuOTg1LTI0LjA2NyAwLTQzLjM2OSAxOC45MzUtNDMuMzY5IDQyLjYwNHptMTkxLjY1MSAxMy45NDhsLTIxLjc0My01NC43MTVoLTE3LjM0NmwzNC41NzkgODMuNTM0aDguNTQzbDM1LjE4My04My41MzRoLTE3LjIxOGwtMjIgNTQuNzE1em00Ni40MzkgMjYuNzM5aDQ1LjA2NnYtMTMuNzg5aC0yOS4xODh2LTIyLjAwMWgyOC4wNzJ2LTEzLjc5MmgtMjguMDcydi0xOC4wNzloMjkuMTg4di0xMy43OTJoLTQ1LjA2NnY4MS40NTR6bTEwNy45NTUtNTcuNDE1YzAtMTUuMjU5LTEwLjQ5LTI0LjAzOS0yOC44MjMtMjQuMDM5aC0yMy41Nzd2ODEuNDU0aDE1Ljg5NXYtMzIuNzM3aDIuMDhsMjEuOTc1IDMyLjczN2gxOS41NDRsLTI1LjY2Ny0zNC4zMTFjMTEuOTg4LTIuNDUxIDE4LjU3My0xMC42MzggMTguNTczLTIzLjEwNHptLTMxLjg4MiAxMy40NTJoLTQuNjIzdi0yNC42ODNoNC44NzdjOS45MTYgMCAxNS4yODcgNC4xNjUgMTUuMjg3IDEyLjA5MiAwIDguMTc4LTUuMzcyIDEyLjU5LTE1LjU0MSAxMi41OXoiIGZpbGw9IiMwQjEwMTUiLz48L3N2Zz4='",
  Elo: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjU2IDBjMTQxLjM4NSAwIDI1NiAxMTQuNjE1IDI1NiAyNTYgMCAxNDEuMzg2LTExNC42MTUgMjU2LTI1NiAyNTZzLTI1Ni0xMTQuNjE0LTI1Ni0yNTZjMC0xNDEuMzg1IDExNC42MTUtMjU2IDI1Ni0yNTYiIGZpbGw9IiMwRTBFMTEiLz48cGF0aCBkPSJNMTgwLjA0MiAyMzcuNTgzbC03OC41MjQgMzMuODM3Yy0uMTIyLTEuMzUzLS4xODktMi43MjEtLjE4OS00LjEwNiAwLTI0LjgzOSAyMC4xMzUtNDQuOTc0IDQ0Ljk3NC00NC45NzQgMTMuNDM4IDAgMjUuNDk5IDUuODk4IDMzLjczOSAxNS4yNDN6bS0zMy43MzktNDguODc2YzM3LjA1MyAwIDY4LjExMiAyNS42MzggNzYuNDIgNjAuMTQzbC0zMS42ODIgMTMuODUzLS4wMDctLjA2Ni0zMi40MTMgMTQuMjQxLTc3Ljc1NSAzMy45OTdjLTguMzE4LTEyLjQ3LTEzLjE3LTI3LjQ0OC0xMy4xNy00My41NjEgMC00My40MTQgMzUuMTkzLTc4LjYwNyA3OC42MDctNzguNjA3em01NC45MjggMTM0LjgzOGMtMjguMTQ1IDI2LjcxMy02NS4zNzkgMjkuMzM1LTk4LjA5NiA5LjQ3M2wxOC40ODUtMjguMTA0YzE4LjYxNyAxMS4xMjggMzcuMzE5IDkuMzIzIDU2LjEwNy01LjQyOGwyMy41MDQgMjQuMDZ6bTMyLjAwNy0xOS40NTdsLS4xOTgtMTQ4LjY1MmgyOC4xNjN2MTQ0LjYzOGMwIDEuMzg4LjE3MiAyLjYxIDEuOTkyIDMuMzE3bDI0LjUgOS41MjgtMTEuMDM4IDI4LjctMjguNy0xMi4xNDNjLTEwLjg4My00LjYwNS0xNC43LTExLjI3Ny0xNC43MTktMjUuMzg5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0zMzkuMjggMzAxLjU4N2MtMTAuNTU3LTguMjA4LTE3LjM1NC0yMS4wMTgtMTcuMzU0LTM1LjQyNiAwLTEyLjgwOSA1LjM3Ny0yNC4zNTQgMTMuOTg1LTMyLjUyOWwtMTguMTktMjkuNDhjLTE4LjI4NSAxNC40ODctMzAuMDI4IDM2Ljg3LTMwLjAyOCA2Mi4wMDkgMCAyNy4wOTYgMTMuNjMyIDUxLjAwMiAzNC40MDcgNjUuMjU0bDE3LjE3OS0yOS44MjgiIGZpbGw9IiMyMDkxQzMiLz48cGF0aCBkPSJNMzUxLjYxIDIyMy45MzhjNC43NC0xLjcwNSA5Ljg1LTIuNjM5IDE1LjE3OC0yLjYzOSAxOS4yMDggMCAzNS41ODggMTIuMDc3IDQxLjk4NSAyOS4wNDhsMzQuODU2LTIuOTEyYy04LjQxNC0zNC42NC0zOS42MTMtNjAuMzY2LTc2Ljg0MS02MC4zNjYtMTAuNTE5IDAtMjAuNTQ5IDIuMDcxLTI5LjczIDUuNzk5bDE0LjU1MiAzMS4wNzEiIGZpbGw9IiNGQUVDMzIiLz48cGF0aCBkPSJNNDExLjU5NSAyNjguMzM1Yy0xLjEzNSAyMy43NjYtMjAuNzYgNDIuNjg4LTQ0LjgwNyA0Mi42ODgtMy43NyAwLTcuNDI4LS40NzItMTAuOTI1LTEuMzQ3bC0xMy42NzMgMzEuNjU3YzcuNzQ1IDIuNTMxIDE2LjAwNyAzLjkyIDI0LjU5OCAzLjkyIDQyLjU5MSAwIDc3LjMwMi0zMy42NyA3OS4wMDktNzUuODQybC0zNC4yMDMtMS4wNzciIGZpbGw9IiNEMDM1MkEiLz48L2c+PC9zdmc+'",
  Hipercard: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjEyMyIgdmlld0JveD0iMCAwIDUxMiAxMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxwYXRoIGQ9Ik0zNzQuMTE4IDgwLjg0MmMtNi45NDMgNi43OTctMjYuNDM0IDguNzI4LTI0LjQ0LTcuNTIgMS42NTYtMTMuNDk1IDE2LjM0OC0xNi4zNjMgMzIuMjczLTE0LjQxNC0xLjE4NCA3LjM4MS0yLjU0MiAxNi43NTUtNy44MzMgMjEuOTM0em0tMjEuOTM0LTUyLjY0MWMtLjY2MyAzLjcyMy0xLjY4MSA3LjA5Mi0yLjUwNiAxMC42NTMgNy45NTEtMS45OTMgMzIuNzA5LTguMTA1IDM1LjA5NSAyLjUwNi43OTIgMy41MjYtLjU3NCA3LjI3Mi0xLjU2NyAxMC4wMjgtMjIuMzg5LTIuMTIxLTQwLjYzNiAxLjU5OS00NS40MzUgMTcuNTQ3LTMuMjE0IDEwLjY4Mi4zNiAyMS4xOTQgNy4yMDcgMjQuMTI5IDEzLjE4NyA1LjY0OSAyOS4yMjgtLjgyMiAzNC43ODEtOS43MTQtLjU3NyAzLjA3OC0xLjEyMyA2LjE4Ny0uOTQgMTAuMDI2aDExLjU5NGMuMTIzLTExLjEwMyAxLjczOS0yMC4wOTEgMy40NDctMzAuMDgyIDEuNDU2LTguNTA4IDQuMTk1LTE2LjkzMSAzLjc1OS0yNC40NC0uOTk1LTE3LjE5Ny0yOS40ODYtMTEuMTE0LTQ1LjQzNC0xMC42NTN6bTExNi4yNDkgNTcuOTY4Yy05LjA3LjE5NS0xMy41OC01LjQxOS0xMy43ODctMTQuNzI2LS4zNjEtMTYuMzAxIDYuNzg5LTM0LjQxMSAyMS4zMDctMzYuMDM1IDYuNzYtLjc1NiAxMS42NTQuODE2IDE2LjYwNyAyLjUwOC00LjU0NyAxOC4zMS0yLjkwNSA0Ny43OTktMjQuMTI4IDQ4LjI1NHptMzAuMDgxLTg2LjE2OWMtMS4xNTUgMTAuMTI1LTIuNjk5IDE5Ljg2Mi00LjY5OSAyOS4xNC0zMy4wNTEtMTAuNDYxLTUzLjMyIDEzLjg1NS01Mi45NTYgNDMuODY4LjA3MiA1LjgwNSAxLjA3MSAxMS41NjEgNC43MDEgMTUuNjY3IDYuMjU2IDcuMDc2IDI0LjE3IDguNzY4IDMzLjIxNCAyLjgyMSAxLjc1Mi0xLjE1MSAzLjU0LTMuMjQ2IDQuNzAxLTQuNy44NzEtMS4wOTUgMi4yNTYtMy45NTkgMi41MDUtMy4xMzUtLjQ3NCAzLjE4Mi0xLjE4NSA2LjEyNy0xLjI1MiA5LjcxNWgxMi4yMmMyLjM1NC0zMy43ODQgOS42MzctNjIuNjQxIDE1LjA0LTkzLjM3NmgtMTMuNDc1em0tMzQ0Ljk4OSA4MS4xNTZjLTcuMjA5IDcuNjM1LTI0LjkzMSA3LjUxOC0yNi4zMi01LjMyOC0uNjA2LTUuNTg5IDEuNDc3LTExLjQ1IDIuNTA2LTE3LjIzMyAxLjA0MS01Ljg1MyAxLjc5MS0xMS40NjkgMi44MTktMTYuNjA5IDcuMS04LjY3IDI3Ljk2NS05LjcxNiAzMC4wODIgNC43MDEgMS44MzcgMTIuNTE3LTMuMTE3IDI4LjE0NS05LjA4NyAzNC40Njh6bTEwLjY1NC01Mi45NTVjLTExLjQwNC00LjI4NC0yNS4zMDMuODMtMzEuMzI4IDUuNjk0LjAyMS4yMTQtLjE0NC4yNDMtLjMyMS4yNTlsLjMyMS0uMjU5LS4wMDctLjA1NC45NC01LjY0aC0xMS41OTRjLTQuODMxIDMyLjE0My0xMC41NjEgNjMuMzg3LTE2LjYwNyA5NC4zMTZoMTMuNDczYzEuOTUtMTIuMDQ2IDMuMjM5LTI0Ljc1MyA1Ljk1NC0zNi4wMzQgMy4wNzcgMTEuODY1IDIzLjE2OSA5LjU5NyAzMS42NDcgNS4wMTQgMTcuNDk0LTkuNDYgMzAuOTg3LTU0LjQ4MSA3LjUyMS02My4yOTZ6bTYzLjkyMSAyMi41NjFoLTMxLjY0N2MxLjAwMS03LjI3NiA3LjU0Ny0xNS4yNzMgMTcuODU5LTE1LjY2NyA5LjcwNy0uMzcxIDE2LjY1NiAzLjU2NCAxMy43ODcgMTUuNjY3em0tMTIuODQ3LTIzLjgxNGMtOS43MzYuNzQ5LTE3Ljk2NSAzLjU1MS0yMy44MTQgOS43MTMtNy4xNzMgNy41NTgtMTIuOTgzIDI0LjI2Ni0xMS4yODEgMzkuNDgyIDIuNDI4IDIxLjcwOCAyOS40NTcgMjAuOTI5IDUxLjA3NSAxNS42NjcuMzY3LTMuODA5IDEuMjktNy4wNjYgMS44OC0xMC42NTMtOC45MDYgMy4zMzItMjQuMzY4IDcuOTg0LTMzLjUyOCAyLjE5NC02LjkxNS00LjM3My02Ljk1Ni0xNS40NDYtNC43LTI1LjA2OCAxNC41MjktLjQ2MiAyOS42MzEtLjM3NCA0NC4xODEgMCAuOTIzLTYuODIxIDMuNTY1LTE0LjI1NyAxLjI1My0yMC45OTMtMy4wNDktOC44OTQtMTMuOTYxLTExLjE5Ni0yNS4wNjctMTAuMzR6bS0xMTguNDQzIDEuMjUzYy0uMzY1LjA1Mi0uMzQxLjQ5NS0uMzE0LjkzOS0yLjk2OSAyMi4yMDMtNi45ODYgNDMuMzU4LTExLjI4IDY0LjIzNmgxMy40NzNjMy4yMzgtMjIuMzUyIDYuOTQ2LTQ0LjIzMyAxMS41OTQtNjUuMTc1aC0xMy40NzN6bTM1MS41Ny4zMTNjLTExLjkwOS01Ljk1My0yMS44MjIgNC4wMzctMjUuNjkzIDEwLjAyNyAxLjEwMi0zLjA3MyAxLjE2Ni03LjE4OCAyLjE5Mi0xMC4zMzloLTExLjkwN2MtMy4yMSAyMi4zNzktNy4wODEgNDQuMDk4LTExLjU5NCA2NS4xNzVoMTMuNzg3Yy4wODgtOC42MzggMS43ODQtMTUuMDI4IDMuMTMzLTIzLjUwMSAyLjg4Mi0xOC4wODggNy4xMTEtMzcuOTI2IDI4LjIwMi0zMS45Ni43LTMuMDYuOTktNi41MyAxLjg4LTkuNDAxem0tMTUxLjM0NSA0OS41MDhjLTEuMjQxLTMuMjA4LTEuNTYzLTguNTA3LTEuMjUzLTEyLjUzNC42OTctOS4wNTQgMy45OTYtMjAuMDc3IDkuMDg3LTI1LjA2NyA3LjAyNi02Ljg4OCAyMC44OTctNS43NDggMzEuOTYtMS44ODEuMzQzLTMuNzI5IDEuMDkzLTcuMDU0IDEuNTY3LTEwLjY1Mi0xOC4xNDUtMi45NjQtMzUuMzY1LTEuMTIxLTQ0LjQ5NCA4LjQ1OS04LjkzNiA5LjM3OC0xNC43OTYgMzAuOTMyLTEwLjY1NCA0NC40OTQgNC44NDggMTUuODcgMjYuNTgzIDE2LjczMyA0NC4xODMgMTAuNjU0Ljc3Ny0zLjE5IDEuMTktNi43NDYgMS44OC0xMC4wMjgtOS42MTYgNC45OTctMjguMDAxIDcuNTkzLTMyLjI3Ni0zLjQ0N3ptLTcuNTE5LTQ5LjgyMWMtMTEuOTQ4LTQuODI1LTIxLjMzOSAzLjMyOS0yNS42OTMgMTAuOTY3Ljk4Ny0zLjM5OCAxLjM5NC03LjM3OCAyLjE5Mi0xMC45NjdoLTExLjkwN2MtMi45MSAyMi41NzUtNy4yMDEgNDMuNzY5LTExLjI4IDY1LjE3NWgxMy40NzVjMS44ODgtMTIuNzA3IDIuNzAzLTI5LjgzNCA2Ljg5Mi00MS45ODggMy4zNDgtOS43MTMgMTIuMTExLTE3Ljk4NyAyNC43NTQtMTMuNDczLjE3OC0zLjU4MyAxLjIwMy02LjMxOCAxLjU2Ny05LjcxNHptLTIxNy4xNDYtMjYuMzIxYy0xLjkyNSAxMi40ODktNC4wOTMgMjQuNzM1LTYuMjY3IDM2Ljk3NC0xMy45NTkuMTQ3LTI4LjIxMS42OS00MS42NzQtLjMxNCAyLjU0My0xMS45NzMgNC4zNjctMjQuNjY4IDYuODkyLTM2LjY2aC0xNS4wMzljLTUuMzg1IDMwLjU0Ny0xMC4yODIgNjEuNTc5LTE2LjI5NCA5MS40OTdoMTUuMzUzYzIuNDA5LTE1LjM0OCA0LjY2MS0zMC44NTIgNy44MzMtNDUuNDM1IDEzLjA5MS0uMzIyIDI4Ljc4MS0uODg1IDQxLjM2Mi4zMTQtMi41OTQgMTUuMTYyLTUuNzI4IDI5Ljc4My04LjE0NyA0NS4xMjFoMTUuMzU0YzQuOTMyLTMwLjk5NyAxMC4xMzEtNjEuNzI4IDE2LjI5NC05MS40OTdoLTE1LjY2N3ptMzguMjI3IDEzLjc4N2MyLjY4Ni0xLjg0OSA2LjE0NS0xMC4yNzggMi4xOTQtMTMuNzg3LTEuMjUyLTEuMTExLTMuMzQ3LTEuNDMzLTYuMjY3LS45MzktMi43MS40NTctNC4yNjggMS4zNzctNS4zMjcgMi44MTktMS43MDMgMi4zMTktMy4yNjMgOS4zMS0uNjI4IDExLjkwNyAyLjU2NyAyLjUyOSA4LjMxOCAxLjE3NyAxMC4wMjggMHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4='",
  Jcb: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjM5NSIgdmlld0JveD0iMCAwIDUxMiAzOTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iLTU3LjUyNyUiIHkxPSI1MC4xMjQlIiB4Mj0iMjMyLjM5MSUiIHkyPSI1MC4xMjQlIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwNzk0MCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMDg3M0YiIG9mZnNldD0iMjIuODUlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQwQTczNyIgb2Zmc2V0PSI3NC4zMyUiLz48c3RvcCBzdG9wLWNvbG9yPSIjNUNCNTMxIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iLjE4MyUiIHkxPSI0OS45NiUiIHgyPSIxMDAuMjczJSIgeTI9IjQ5Ljk2JSIgaWQ9ImIiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDc5NDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDA4NzNGIiBvZmZzZXQ9IjIyLjg1JSIvPjxzdG9wIHN0b3AtY29sb3I9IiM0MEE3MzciIG9mZnNldD0iNzQuMzMlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzVDQjUzMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ii02Mi44MDIlIiB5MT0iNDkuODU4JSIgeDI9IjI1My42NzElIiB5Mj0iNDkuODU4JSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiMwMDc5NDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDA4NzNGIiBvZmZzZXQ9IjIyLjg1JSIvPjxzdG9wIHN0b3AtY29sb3I9IiM0MEE3MzciIG9mZnNldD0iNzQuMzMlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzVDQjUzMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ii4xNzYlIiB5MT0iNTAuMDA2JSIgeDI9IjEwMS44MDglIiB5Mj0iNTAuMDA2JSIgaWQ9ImQiPjxzdG9wIHN0b3AtY29sb3I9IiMxRjI4NkYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMDA0RTk0IiBvZmZzZXQ9IjQ3LjUxJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMwMDY2QjEiIG9mZnNldD0iODIuNjElIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzAwNkZCQyIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ii0uNTc2JSIgeTE9IjQ5LjkxNCUiIHgyPSI5OC4xMzMlIiB5Mj0iNDkuOTE0JSIgaWQ9ImUiPjxzdG9wIHN0b3AtY29sb3I9IiM2QzJDMkYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjODgyNzMwIiBvZmZzZXQ9IjE3LjM1JSIvPjxzdG9wIHN0b3AtY29sb3I9IiNCRTE4MzMiIG9mZnNldD0iNTcuMzElIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0RDMDQzNiIgb2Zmc2V0PSI4NS44NSUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRTYwMDM5IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTEyIDMxNC44MzZjMCA0My44MTQtMzUuNjc3IDc5LjQ5MS03OS40OTEgNzkuNDkxaC00MzIuNTA5di0zMTQuODM2YzAtNDMuODE0IDM1LjY3Ny03OS40OTEgNzkuNDkxLTc5LjQ5MWg0MzIuNTA5djMxNC44MzZ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTM3MS4xNjkgMjM0LjA5M2gzMi44NjFsNC4wNjgtLjMxM2M2LjI1OS0xLjI1MiAxMS41NzktNi44ODUgMTEuNTc5LTE0LjcwOSAwLTcuNTExLTUuMzItMTMuMTQ0LTExLjU3OS0xNC43MDktLjkzOS0uMzEzLTIuODE3LS4zMTMtNC4wNjgtLjMxM2gtMzIuODYxdjMwLjA0NHoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNNDAwLjI3NCAyNi42MDFjLTMxLjI5NiAwLTU2Ljk1OCAyNS4zNS01Ni45NTggNTYuOTU4djU5LjE0OWg4MC40M2MxLjg3OCAwIDQuMDY4IDAgNS42MzMuMzEzIDE4LjE1Mi45MzkgMzEuNjA5IDEwLjMyOCAzMS42MDkgMjYuNjAxIDAgMTIuODMxLTkuMDc2IDIzLjc4NS0yNS45NzYgMjUuOTc2di42MjZjMTguNDY1IDEuMjUyIDMyLjU0OCAxMS41NzkgMzIuNTQ4IDI3LjU0IDAgMTcuMjEzLTE1LjY0OCAyOC40NzktMzYuMzAzIDI4LjQ3OWgtODguMjU0djExNS43OTVoODMuNTZjMzEuMjk2IDAgNTYuOTU4LTI1LjM1IDU2Ljk1OC01Ni45NTh2LTI4NC40NzloLTgzLjI0N3oiIGZpbGw9InVybCgjYikiLz48cGF0aCBkPSJNNDE1LjYwOSAxNzMuMzc5YzAtNy41MTEtNS4zMi0xMi41MTgtMTEuNTc5LTEzLjQ1Ny0uNjI2IDAtMi4xOTEtLjMxMy0zLjEzLS4zMTNoLTI5LjczMXYyNy41NGgyOS43MzFjLjkzOSAwIDIuODE3IDAgMy4xMy0uMzEzIDYuMjU5LS45MzkgMTEuNTc5LTUuOTQ2IDExLjU3OS0xMy40NTd6IiBmaWxsPSJ1cmwoI2MpIi8+PHBhdGggZD0iTTg1LjQzOCAyNi42MDFjLTMxLjI5NiAwLTU2Ljk1OCAyNS4zNS01Ni45NTggNTYuOTU4djE0MC41MThjMTUuOTYxIDcuODI0IDMyLjU0OCAxMi44MzEgNDkuMTM0IDEyLjgzMSAxOS43MTYgMCAzMC4zNTctMTEuODkyIDMwLjM1Ny0yOC4xNjZ2LTY2LjM0N2g0OC44MjJ2NjYuMDM0YzAgMjUuNjYzLTE1Ljk2MSA0Ni42MzEtNzAuMTAzIDQ2LjYzMS0zMi44NjEgMC01OC41MjMtNy4xOTgtNTguNTIzLTcuMTk4djExOS44NjNoODMuNTZjMzEuMjk2IDAgNTYuOTU4LTI1LjM1IDU2Ljk1OC01Ni45NTh2LTI4NC4xNjZoLTgzLjI0N3oiIGZpbGw9InVybCgjZCkiLz48cGF0aCBkPSJNMjQyLjg1NiAyNi42MDFjLTMxLjI5NiAwLTU2Ljk1OCAyNS4zNS01Ni45NTggNTYuOTU4djc0LjQ4NGMxNC4zOTYtMTIuMjA1IDM5LjQzMy0yMC4wMjkgNzkuODA0LTE4LjE1MiAyMS41OTQuOTM5IDQ0Ljc1MyA2Ljg4NSA0NC43NTMgNi44ODV2MjQuMDk4Yy0xMS41NzktNS45NDYtMjUuMzUtMTEuMjY3LTQzLjE4OC0xMi41MTgtMzAuNjctMi4xOTEtNDkuMTM0IDEyLjgzMS00OS4xMzQgMzkuMTIgMCAyNi42MDEgMTguNDY1IDQxLjYyMyA0OS4xMzQgMzkuMTIgMTcuODM5LTEuMjUyIDMxLjYwOS02Ljg4NSA0My4xODgtMTIuNTE4djI0LjA5OHMtMjIuODQ2IDUuOTQ2LTQ0Ljc1MyA2Ljg4NWMtNDAuMzcyIDEuODc4LTY1LjQwOC01Ljk0Ni03OS44MDQtMTguMTUydjEzMS40NDNoODMuNTZjMzEuMjk2IDAgNTYuOTU4LTI1LjM1IDU2Ljk1OC01Ni45NTh2LTI4NC43OTJoLTgzLjU2eiIgZmlsbD0idXJsKCNlKSIvPjwvc3ZnPg=='",
  Laser: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjM2OCIgdmlld0JveD0iMCAwIDUxMiAzNjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxwYXRoIGZpbGw9IiMyODM0N0QiIGQ9Ik0wIDM2Ny4yMTJoNTEydi0zNjcuMjExaC01MTJ6Ii8+PHBhdGggZD0iTTI1My45MSAyOTEuMDQzaC0yNTMuOTF2Mi4wOTZoMjUyLjY5bC4xMTYgNy42MjIgNC43NjQtNy42MjJoMjU0LjQzdi0yLjA5NmgtMjUzLjI3MWwzLjY2My02LjExMi04LjQ4MiA2LjExMnptMi41NTYtMjAuMDg0aC0yNTYuNDY2djIuMDk2aDI1NS40Mmw5LjE0NyA4LjM5OCA1LjExMi04LjM5OGgyNDIuMzIxdi0yLjA5NmgtMjQxLjA0NWw0LjY3Ny03LjY4NC0xOS4xNjYgNy42ODR6bTIuMTUtMjAuMDgzaC0yNTguNjE2djIuMDk2aDI1NS45OTlsMjAuODgyIDguMjUyIDUuMDIyLTguMjUyaDIzMC4wOTd2LTIuMDk2aC0yMjguODJsNC4xMS02Ljc1Mi0yOC42NzQgNi43NTJ6bS02Ljk3Mi0yMC4wODNoLTI1MS42NDR2Mi4wOTZoMjUwLjAxN2wzOS4zNDIgNy44MzYgNC43Ny03LjgzNmgyMTcuODcxdi0yLjA5NmgtMjE2LjU5NGw0LjEzNC03LjI1Mi00Ny44OTYgNy4yNTJ6bS0yMi43NzUtMTcuMDU3aC0yMjguODY4djIuMDk2aDIzNy43bDYzLjEgNS45OTYgMy43MTEtNS45OTZoMjA3LjQ4OXYtMi4wOTZoLTIwNi4yMTRsNS4xMy04LjMyNC04Mi4wNDggOC4zMjR6bS0zLjMxLTIwLjA4M2gtMjI1LjU1OHYyLjA5NmgyMjYuMDgxbDg2Ljg4OSA2LjExMiAzLjc2Ni02LjExMmgxOTUuMjY0di0yLjA5NmgtMTkzLjk4OGw0LjUzNS03LjQ1MS05Ni45ODkgNy40NTF6bS0zLjEzOC0yMC4wODNoLTIyMi40MnYyLjA5NmgyMjEuOTU1bDEwMy4xMjEgNi4zNDQgMy44ODYtNi4zNDRoMTgzLjAzOHYtMi4wOTZoLTE4MS43NjNsNC40MzQtNy4yMTgtMTEyLjI1MSA3LjIxOHptLTguNzcyLTIwLjA4M2gtMjEzLjY0N3YyLjA5NWgyMTMuMjk4bDEyMy40ODIgNy42NjcgNC42MDUtNy42NjdoMTcwLjYxNXYtMi4wOTVoLTE2OS4zNTZsNC4wNzgtNi43ODgtMTMzLjA3NSA2Ljc4OHptLTE5LjA1Ny0xNy4yODloLTE5NC41OTF2Mi4wOTZoMTk0LjQxNmwxNTMuNjY3IDYuMTM4IDMuNjg5LTYuMTM4aDE2MC4yMjh2LTIuMDk2aC0xNTguOTdsNC42MzEtNy43MDktMTYzLjA3IDcuNzA5em00Ljc2NS0yMC4wODRoLTE5OS4zNTV2Mi4wOTZoMTk4LjMwOGwxNjEuNDQzIDYuODEgNC4wODQtNi44MWgxNDguMTY1di0yLjA5NmgtMTQ2LjkwNmw0LjAxNS02LjY4NC0xNjkuNzU0IDYuNjg0em0tMTEuMzMtMjAuMDgzaC0xODguMDI1djIuMDk2aDE4Ni45NzlsMTg0LjY3NiA3LjEwMiA0LjI0NC03LjEwMmgxMzYuMTAxdi0yLjA5NmgtMTM0Ljg0MmwzLjY3Ny02LjE3MS0xOTIuODEgNi4xNzF6bS04Ljg4OS0yMC4wODNoLTE3OS4xMzZ2Mi4wOTZoMTY0Ljg0NGwyMTkuMDg2IDYuNzEzIDQuMDMzLTYuNzEzaDEyNC4wMzd2LTIuMDk2aC0xMjIuNzc4bDMuNjc4LTYuMTIxLTIxMy43NjQgNi4xMjF6bS0xLjIyLTIwLjA4M2gtMTc3LjkxNnYyLjA5NmgxNzUuNjVsMjE5Ljc0OCA3LjcwNiA0LjYzLTcuNzA2aDExMS45NzJ2LTIuMDk2aC0xMTAuNzE0bDMuOTIyLTYuNTItMjI3LjI5MiA2LjUyem0tMTIuMzc1LTIwLjA4M2gtMTY1LjU0MXYyLjA5NWgxMzIuNTQybDI3NS4yOTkgNy4wNzggNC4yNTEtNy4wNzhoOTkuOTA4di0yLjA5NWgtOTguNjQ5bDMuODE3LTYuMzU2LTI1MS42MjcgNi4zNTZ6bS04Mi4yMjctMTYuNjQ5aC04My4zMTR2Mi4wOTZoMjAwLjA1MmwyMTkuNTU0IDQuMTM4IDIuNDg3LTQuMTM4aDg5LjkwN3YtMi4wOTZoLTg4LjY0OGw1LjU4OC05LjMwMy0zNDUuNjI1IDkuMzAzeiIgZmlsbD0iI0VCMEQ3RiIvPjxwYXRoIGQ9Ik0xMzQuNzEgMzQ5LjE0MXYtMzcuNjE4aDcuNjQzdjMxLjIyN2gxOS4wMDV2Ni4zOTFoLTI2LjY0OHptODMuMTU1IDBoLTguMzE0bC0zLjMwNi04LjYxNWgtMTUuMTMybC0zLjEyNCA4LjYxNWgtOC4xMDhsMTQuNzQ0LTM3LjkyOWg4LjA4MmwxNS4xNTcgMzcuOTI5em0tMTQuMDczLTE1LjAwNmwtNS4yMTYtMTQuMDc1LTUuMTEzIDE0LjA3NWgxMC4zMjl6bTMzLjExMiAyLjY2NWw3LjQzNi0uNzI1Yy40NDcgMi41MDIgMS4zNTYgNC4zMzkgMi43MjUgNS41MTEgMS4zNjggMS4xNzQgMy4yMTUgMS43NTkgNS41MzkgMS43NTkgMi40NiAwIDQuMzE3LS41MjEgNS41NjQtMS41NjYgMS4yNDgtMS4wNDIgMS44NzItMi4yNjMgMS44NzItMy42NiAwLS44OTYtLjI2My0xLjY2LS43ODctMi4yOS0uNTI1LS42MjktMS40NDQtMS4xNzYtMi43NTItMS42NDItLjg5NC0uMzExLTIuOTM1LS44NjItNi4xMTktMS42NTYtNC4wOTctMS4wMTctNi45NzEtMi4yNjctOC42MjQtMy43NTItMi4zMjMtMi4wODYtMy40ODUtNC42MzEtMy40ODUtNy42MzIgMC0xLjkzMS41NDYtMy43MzkgMS42MzktNS40MTkgMS4wOTMtMS42ODMgMi42NjgtMi45NjQgNC43MjYtMy44NDMgMi4wNTctLjg4IDQuNTM5LTEuMzE5IDcuNDUtMS4zMTkgNC43NTEgMCA4LjMyOCAxLjA0NCAxMC43MjggMy4xMyAyLjQwMyAyLjA4NyAzLjY2MSA0Ljg3NCAzLjc4NCA4LjM1NmwtNy42NDMuMzM3Yy0uMzI5LTEuOTQ4LTEuMDMxLTMuMzUtMi4xMDQtNC4yMDUtMS4wNzctLjg1Mi0yLjY5MS0xLjI4LTQuODQ0LTEuMjgtMi4yMjEgMC0zLjk1OS40NTgtNS4yMTYgMS4zNzEtLjgwOS41ODctMS4yMTQgMS4zNzItMS4yMTQgMi4zNTUgMCAuODk3LjM3OCAxLjY2NSAxLjEzNyAyLjMwMi45NjMuODEyIDMuMzA1IDEuNjU2IDcuMDI0IDIuNTM2IDMuNzE4Ljg3OSA2LjQ2OCAxLjc4OSA4LjI0OSAyLjczIDEuNzgzLjkzOSAzLjE3OCAyLjIyNSA0LjE4MyAzLjg1MyAxLjAwOCAxLjYzMiAxLjUxMSAzLjY0NiAxLjUxMSA2LjA0MiAwIDIuMTc0LS42MDMgNC4yMDktMS44MDcgNi4xMDYtMS4yMDcgMS44OTgtMi45MSAzLjMwOC01LjExMiA0LjIzMS0yLjIwNS45MjItNC45NSAxLjM4NC04LjIzOSAxLjM4NC00Ljc4NiAwLTguNDYtMS4xMDktMTEuMDI1LTMuMzI2LTIuNTY1LTIuMjE1LTQuMDk3LTUuNDQ1LTQuNTk2LTkuNjg4em01NC4xMzIgMTIuMzQxdi0zNy45MjloMjguMDY5djYuNDE3aC0yMC40MjZ2OC40MDhoMTkuMDA1djYuMzkxaC0xOS4wMDV2MTAuMzIyaDIxLjE0OXY2LjM5MWgtMjguNzkyem01Mi4yMiAwdi0zNy45MjloMTYuMDg3YzQuMDQ1IDAgNi45ODQuMzQgOC44MTkgMS4wMjEgMS44MzIuNjgzIDMuMzAxIDEuODk1IDQuNDAyIDMuNjM2IDEuMTAxIDEuNzQzIDEuNjUzIDMuNzM1IDEuNjUzIDUuOTc3IDAgMi44NDUtLjgzNiA1LjE5Ni0yLjUwNSA3LjA0OS0xLjY3IDEuODU1LTQuMTY3IDMuMDI1LTcuNDg4IDMuNTA2IDEuNjUzLjk2NyAzLjAxNyAyLjAyOCA0LjA5NCAzLjE4MyAxLjA3NSAxLjE1NiAyLjUyNCAzLjIwOCA0LjM1MSA2LjE1N2w0LjYyMSA3LjRoLTkuMTRsLTUuNTI2LTguMjU0Yy0xLjk2Mi0yLjk0OS0zLjMwNS00LjgwOC00LjAyOC01LjU3Ni0uNzIzLS43NjYtMS40ODktMS4yOTMtMi4yOTktMS41NzctLjgwOS0uMjg2LTIuMDkxLS40MjctMy44NDYtLjQyN2gtMS41NXYxNS44MzRoLTcuNjQzem03LjY0My0yMS44ODhoNS42NTVjMy42NjcgMCA1Ljk1NS0uMTU1IDYuODY5LS40NjYuOTEyLS4zMSAxLjYyNy0uODQ0IDIuMTQ0LTEuNjA0LjUxNi0uNzU5Ljc3NC0xLjcwNy43NzQtMi44NDYgMC0xLjI3Ni0uMzQtMi4zMDctMS4wMTktMy4wOTEtLjY4Mi0uNzg1LTEuNjQxLTEuMjgxLTIuODgtMS40ODgtLjYyLS4wODYtMi40NzgtLjEzLTUuNTc3LS4xM2gtNS45NjV2OS42MjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+'",
  Maestro: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjM5OCIgdmlld0JveD0iMCAwIDUxMiAzOTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxwYXRoIGZpbGw9IiM2QzZCQkQiIGQ9Ik0zMjUuMjIzIDI4Mi42MjloLTEzOC40NDV2LTI0OC44MDNoMTM4LjQ0NXoiLz48cGF0aCBkPSJNMTk1LjU2NSAxNTguMjMzYzAtNTAuNDcxIDIzLjYzMS05NS40MjkgNjAuNDMtMTI0LjQwMS0yNi45MS0yMS4xODYtNjAuODczLTMzLjgzMi05Ny43ODMtMzMuODMyLTg3LjM4MSAwLTE1OC4yMTMgNzAuODQyLTE1OC4yMTMgMTU4LjIzM3M3MC44MzIgMTU4LjIzMyAxNTguMjEzIDE1OC4yMzNjMzYuOTEgMCA3MC44NzItMTIuNjQ1IDk3Ljc4My0zMy44MzItMzYuNzk5LTI4Ljk3My02MC40My03My45MzEtNjAuNDMtMTI0LjQwMSIgZmlsbD0iI0QzMjAxMSIvPjxwYXRoIGQ9Ik01MTIgMTU4LjIzM2MwIDg3LjM5MS03MC44MzIgMTU4LjIzMy0xNTguMjEzIDE1OC4yMzMtMzYuOTEgMC03MC44NzItMTIuNjQ1LTk3Ljc5My0zMy44MzIgMzYuODA5LTI4Ljk3MyA2MC40NC03My45MzEgNjAuNDQtMTI0LjQwMSAwLTUwLjQ3MS0yMy42MzEtOTUuNDI5LTYwLjQ0LTEyNC40MDEgMjYuOTItMjEuMTg2IDYwLjg4My0zMy44MzIgOTcuNzkzLTMzLjgzMiA4Ny4zODEgMCAxNTguMjEzIDcwLjg0MiAxNTguMjEzIDE1OC4yMzMiIGZpbGw9IiMwMDk5REYiLz48cGF0aCBkPSJNMzcyLjA2NSAzNTIuOTM0YzEuODQxIDAgNC40ODcuMzUyIDYuNTA5IDEuMTQ3bC0yLjgxNyA4LjYxMWMtMS45MzItLjc5NS0zLjg2My0xLjA1Ni01LjcxNC0xLjA1Ni01Ljk3NiAwLTguOTYzIDMuODYzLTguOTYzIDEwLjgwNHYyMy41NmgtOS4xNDR2LTQyLjAxaDkuMDU0djUuMWMyLjM3NC0zLjY5MiA1LjgwNS02LjE1NyAxMS4wNzYtNi4xNTd6bS0zMy43ODEgOS40MDZoLTE0LjkzOXYxOC45ODNjMCA0LjIxNSAxLjQ4OSA3LjAzMiA2LjA2NiA3LjAzMiAyLjM3NCAwIDUuMzYyLS43OTUgOC4wNzgtMi4zNzRsMi42MzYgNy44MTdjLTIuODk3IDIuMDIyLTcuNDY0IDMuMjU5LTExLjQxOCAzLjI1OS0xMC44MTQgMC0xNC41ODctNS44MDUtMTQuNTg3LTE1LjU2M3YtMTkuMTU0aC04LjUzMXYtOC4zNWg4LjUzMXYtMTIuNzQ2aDkuMjI1djEyLjc0NmgxNC45Mzl2OC4zNXptLTExNi45ODcgOC45NjNjLjk3Ni02LjA2NiA0LjY1OC0xMC4yMDEgMTEuMTY3LTEwLjIwMSA1Ljg4NSAwIDkuNjY4IDMuNjkyIDEwLjYzMyAxMC4yMDFoLTIxLjh6bTMxLjI5NyAzLjY5MmMtLjA5MS0xMy4wOTgtOC4xNzktMjIuMDYxLTE5Ljk1OS0yMi4wNjEtMTIuMzAzIDAtMjAuOTE1IDguOTYzLTIwLjkxNSAyMi4wNjEgMCAxMy4zNSA4Ljk2MyAyMi4wNTEgMjEuNTM4IDIyLjA1MSA2LjMyOCAwIDEyLjEyMi0xLjU3OSAxNy4yMjMtNS44ODVsLTQuNDg3LTYuNzdjLTMuNTExIDIuODE3LTcuOTk4IDQuMzk2LTEyLjIxMyA0LjM5Ni01Ljg4NSAwLTExLjI0Ny0yLjcyNi0xMi41NjUtMTAuMjgxaDMxLjE5NmMuMDkxLTEuMTQ3LjE4MS0yLjI4NC4xODEtMy41MTF6bTQwLjE1OS0xMC4yODFjLTIuNTQ1LTEuNTg5LTcuNzI2LTMuNjEyLTEzLjA4OC0zLjYxMi01LjAxIDAtNy45OTggMS44NTEtNy45OTggNC45MjkgMCAyLjgwNyAzLjE1OSAzLjYwMSA3LjExMiA0LjEyNWw0LjMwNi42MTRjOS4xNDQgMS4zMjggMTQuNjc3IDUuMTkxIDE0LjY3NyAxMi41NzUgMCA3Ljk5OC03LjAzMiAxMy43MTItMTkuMTU0IDEzLjcxMi02Ljg2MSAwLTEzLjE4OS0xLjc2LTE4LjE5OC01LjQ1Mmw0LjMwNi03LjEyMmMzLjA3OCAyLjM3NCA3LjY1NiA0LjM5NiAxMy45ODMgNC4zOTYgNi4yMzcgMCA5LjU3Ny0xLjg0MSA5LjU3Ny01LjEgMC0yLjM2NC0yLjM3NC0zLjY5Mi03LjM4NC00LjM4NmwtNC4zMDYtLjYxNGMtOS40MDYtMS4zMjgtMTQuNTA2LTUuNTQzLTE0LjUwNi0xMi4zOTQgMC04LjM1IDYuODYxLTEzLjQ1IDE3LjQ5NC0xMy40NSA2LjY4IDAgMTIuNzQ2IDEuNDk5IDE3LjEzMiA0LjM5NmwtMy45NTQgNy4zODR6bTExMi43MjItMy4wOThjLTEuODgxIDAtMy42MjIuMzMyLTUuMjQxLjk4Ni0xLjYxLjY2NC0zLjAwOCAxLjU4OS00LjE4NSAyLjc3Ny0xLjE3NyAxLjE4Ny0yLjEwMyAyLjYxNi0yLjc3NyA0LjI3NS0uNjc0IDEuNjYtMS4wMDYgMy40OTEtMS4wMDYgNS40ODMgMCAyLjAwMi4zMzIgMy44MjMgMS4wMDYgNS40ODMuNjc0IDEuNjYgMS42IDMuMDg4IDIuNzc3IDQuMjc1IDEuMTc3IDEuMTg3IDIuNTc1IDIuMTEzIDQuMTg1IDIuNzc3IDEuNjIuNjY0IDMuMzYuOTg2IDUuMjQxLjk4NiAxLjg4MSAwIDMuNjMyLS4zMjIgNS4yNDEtLjk4NiAxLjYyLS42NjQgMy4wMjgtMS41ODkgNC4yMDUtMi43NzcgMS4xOTctMS4xODcgMi4xMjMtMi42MTYgMi44MDctNC4yNzUuNjc0LTEuNjYgMS4wMDYtMy40ODEgMS4wMDYtNS40ODMgMC0xLjk5Mi0uMzMyLTMuODIzLTEuMDA2LTUuNDgzLS42ODQtMS42Ni0xLjYxLTMuMDg4LTIuODA3LTQuMjc1LTEuMTc3LTEuMTg3LTIuNTg1LTIuMTEzLTQuMjA1LTIuNzc3LTEuNjEtLjY1NC0zLjM2LS45ODYtNS4yNDEtLjk4NnptMC04LjY4MmMzLjI1OSAwIDYuMjc3LjU2MyA5LjA1NCAxLjcgMi43NzcgMS4xMjcgNS4xODEgMi42ODYgNy4yMDMgNC42NjggMi4wMzIgMS45ODIgMy42MTIgNC4zMjYgNC43NTggNy4wMjIgMS4xNDcgMi43MDYgMS43MiA1LjY0NCAxLjcyIDguODEzIDAgMy4xNjktLjU3MyA2LjEwNi0xLjcyIDguODEzLTEuMTQ3IDIuNjk2LTIuNzI2IDUuMDUtNC43NTggNy4wMzItMi4wMjIgMS45ODItNC40MjYgMy41MzEtNy4yMDMgNC42NjgtMi43NzcgMS4xMjctNS43OTUgMS42OS05LjA1NCAxLjY5LTMuMjU5IDAtNi4yNzctLjU2My05LjA1NC0xLjY5LTIuNzc3LTEuMTM3LTUuMTYxLTIuNjg2LTcuMTczLTQuNjY4LTIuMDEyLTEuOTgyLTMuNTkxLTQuMzM2LTQuNzM4LTcuMDMyLTEuMTQ3LTIuNzA2LTEuNzItNS42NDQtMS43Mi04LjgxMyAwLTMuMTY5LjU3My02LjEwNiAxLjcyLTguODEzIDEuMTQ3LTIuNjk2IDIuNzI2LTUuMDQgNC43MzgtNy4wMjIgMi4wMTItMS45ODIgNC4zOTYtMy41NDEgNy4xNzMtNC42NjggMi43NzctMS4xMzcgNS43OTUtMS43IDkuMDU0LTEuN3ptLTIzNy41NzYgMjIuMDYxYzAtNy4zODQgNC44MzktMTMuNDUgMTIuNzQ2LTEzLjQ1IDcuNTU1IDAgMTIuNjU1IDUuODA1IDEyLjY1NSAxMy40NSAwIDcuNjQ2LTUuMSAxMy40NC0xMi42NTUgMTMuNDQtNy45MDcgMC0xMi43NDYtNi4wNTYtMTIuNzQ2LTEzLjQ0em0zNC4wMTMgMHYtMjEuMDA1aC05LjEzNHY1LjFjLTIuOTA3LTMuNzgzLTcuMjkzLTYuMTU3LTEzLjI2OS02LjE1Ny0xMS43OCAwLTIxLjAwNSA5LjIyNS0yMS4wMDUgMjIuMDYxIDAgMTIuODI2IDkuMjI1IDIyLjA2MSAyMS4wMDUgMjIuMDYxIDUuOTc2IDAgMTAuMzYyLTIuMzc0IDEzLjI2OS02LjE1N3Y1LjFoOS4xMzR2LTIxLjAwNXptLTUxLjQ5NyAyMS4wMDV2LTI2LjM2N2MwLTkuOTI5LTYuMzI4LTE2LjYwOS0xNi41MTgtMTYuNy01LjM2Mi0uMDkxLTEwLjkwNSAxLjU3OS0xNC43NjggNy40NzUtMi44OTctNC42NTgtNy40NzUtNy40NzUtMTMuODkzLTcuNDc1LTQuNDc3IDAtOC44NzMgMS4zMTgtMTIuMzAzIDYuMjM3di01LjE4MWgtOS4xMzR2NDIuMDFoOS4yMjV2LTIzLjI4OWMwLTcuMjkzIDQuMDQ0LTExLjE2NyAxMC4yODEtMTEuMTY3IDYuMDY2IDAgOS4xNDQgMy45NTQgOS4xNDQgMTEuMDc2djIzLjM3OWg5LjIyNXYtMjMuMjg5YzAtNy4yOTMgNC4yMjUtMTEuMTY3IDEwLjI4MS0xMS4xNjcgNi4yNDcgMCA5LjIzNSAzLjk1NCA5LjIzNSAxMS4wNzZ2MjMuMzc5aDkuMjI1eiIgZmlsbD0iIzExMEYwRCIvPjwvc3ZnPg=='",
  Mastercard: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjM5NyIgdmlld0JveD0iMCAwIDUxMiAzOTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxwYXRoIGQ9Ik05My4wNzkgMzk2LjAyM3YtMjYuMzQzYzAtMTAuMDk4LTYuMTQ3LTE2LjY4NC0xNi42ODQtMTYuNjg0LTUuMjY5IDAtMTAuOTc2IDEuNzU2LTE0LjkyOCA3LjQ2NC0zLjA3My00LjgzLTcuNDY0LTcuNDY0LTE0LjA1LTcuNDY0LTQuMzkgMC04Ljc4MSAxLjMxNy0xMi4yOTMgNi4xNDd2LTUuMjY5aC05LjIydjQyLjE0OWg5LjIydi0yMy4yN2MwLTcuNDY0IDMuOTUxLTEwLjk3NiAxMC4wOTgtMTAuOTc2czkuMjIgMy45NTEgOS4yMiAxMC45NzZ2MjMuMjdoOS4yMnYtMjMuMjdjMC03LjQ2NCA0LjM5LTEwLjk3NiAxMC4wOTgtMTAuOTc2IDYuMTQ3IDAgOS4yMiAzLjk1MSA5LjIyIDEwLjk3NnYyMy4yN2gxMC4wOTh6bTEzNi41NDQtNDIuMTQ5aC0xNC45Mjh2LTEyLjczMmgtOS4yMnYxMi43MzJoLTguMzQydjguMzQyaDguMzQydjE5LjMxOGMwIDkuNjU5IDMuOTUxIDE1LjM2NyAxNC40ODkgMTUuMzY3IDMuOTUxIDAgOC4zNDItMS4zMTcgMTEuNDE1LTMuMDczbC0yLjYzNC03LjkwM2MtMi42MzQgMS43NTYtNS43MDggMi4xOTUtNy45MDMgMi4xOTUtNC4zOSAwLTYuMTQ3LTIuNjM0LTYuMTQ3LTcuMDI1di0xOC44NzloMTQuOTI4di04LjM0MnptNzguMTUxLS44NzhjLTUuMjY5IDAtOC43ODEgMi42MzQtMTAuOTc2IDYuMTQ3di01LjI2OWgtOS4yMnY0Mi4xNDloOS4yMnYtMjMuNzA5YzAtNy4wMjUgMy4wNzMtMTAuOTc2IDguNzgxLTEwLjk3NiAxLjc1NiAwIDMuOTUxLjQzOSA1LjcwOC44NzhsMi42MzQtOC43ODFjLTEuNzU2LS40MzktNC4zOS0uNDM5LTYuMTQ3LS40Mzl6bS0xMTguMTA0IDQuMzljLTQuMzktMy4wNzMtMTAuNTM3LTQuMzktMTcuMTIzLTQuMzktMTAuNTM3IDAtMTcuNTYyIDUuMjY5LTE3LjU2MiAxMy42MTEgMCA3LjAyNSA1LjI2OSAxMC45NzYgMTQuNDg5IDEyLjI5M2w0LjM5LjQzOWM0LjgzLjg3OCA3LjQ2NCAyLjE5NSA3LjQ2NCA0LjM5IDAgMy4wNzMtMy41MTIgNS4yNjktOS42NTkgNS4yNjlzLTEwLjk3Ni0yLjE5NS0xNC4wNS00LjM5bC00LjM5IDcuMDI1YzQuODMgMy41MTIgMTEuNDE1IDUuMjY5IDE4LjAwMSA1LjI2OSAxMi4yOTMgMCAxOS4zMTgtNS43MDggMTkuMzE4LTEzLjYxMSAwLTcuNDY0LTUuNzA4LTExLjQxNS0xNC40ODktMTIuNzMybC00LjM5LS40MzljLTMuOTUxLS40MzktNy4wMjUtMS4zMTctNy4wMjUtMy45NTEgMC0zLjA3MyAzLjA3My00LjgzIDcuOTAzLTQuODMgNS4yNjkgMCAxMC41MzcgMi4xOTUgMTMuMTcxIDMuNTEybDMuOTUxLTcuNDY0em0yNDQuOTktNC4zOWMtNS4yNjkgMC04Ljc4MSAyLjYzNC0xMC45NzYgNi4xNDd2LTUuMjY5aC05LjIydjQyLjE0OWg5LjIydi0yMy43MDljMC03LjAyNSAzLjA3My0xMC45NzYgOC43ODEtMTAuOTc2IDEuNzU2IDAgMy45NTEuNDM5IDUuNzA4Ljg3OGwyLjYzNC04Ljc4MWMtMS43NTYtLjQzOS00LjM5LS40MzktNi4xNDctLjQzOXptLTExNy42NjUgMjEuOTUyYzAgMTIuNzMyIDguNzgxIDIxLjk1MiAyMi4zOTIgMjEuOTUyIDYuMTQ3IDAgMTAuNTM3LTEuMzE3IDE0LjkyOC00LjgzbC00LjM5LTcuNDY0Yy0zLjUxMiAyLjYzNC03LjAyNSAzLjk1MS0xMC45NzYgMy45NTEtNy40NjQgMC0xMi43MzItNS4yNjktMTIuNzMyLTEzLjYxMSAwLTcuOTAzIDUuMjY5LTEzLjE3MSAxMi43MzItMTMuNjExIDMuOTUxIDAgNy40NjQgMS4zMTcgMTAuOTc2IDMuOTUxbDQuMzktNy40NjRjLTQuMzktMy41MTItOC43ODEtNC44My0xNC45MjgtNC44My0xMy42MTEgMC0yMi4zOTIgOS4yMi0yMi4zOTIgMjEuOTUyem04NS4xNzYgMHYtMjEuMDc0aC05LjIydjUuMjY5Yy0zLjA3My0zLjk1MS03LjQ2NC02LjE0Ny0xMy4xNzEtNi4xNDctMTEuODU0IDAtMjEuMDc0IDkuMjItMjEuMDc0IDIxLjk1MiAwIDEyLjczMiA5LjIyIDIxLjk1MiAyMS4wNzQgMjEuOTUyIDYuMTQ3IDAgMTAuNTM3LTIuMTk1IDEzLjE3MS02LjE0N3Y1LjI2OWg5LjIydi0yMS4wNzR6bS0zMy44MDcgMGMwLTcuNDY0IDQuODMtMTMuNjExIDEyLjczMi0xMy42MTEgNy40NjQgMCAxMi43MzIgNS43MDggMTIuNzMyIDEzLjYxMSAwIDcuNDY0LTUuMjY5IDEzLjYxMS0xMi43MzIgMTMuNjExLTcuOTAzLS40MzktMTIuNzMyLTYuMTQ3LTEyLjczMi0xMy42MTF6bS0xMTAuMjAxLTIxLjk1MmMtMTIuMjkzIDAtMjEuMDc0IDguNzgxLTIxLjA3NCAyMS45NTIgMCAxMy4xNzEgOC43ODEgMjEuOTUyIDIxLjUxMyAyMS45NTIgNi4xNDcgMCAxMi4yOTMtMS43NTYgMTcuMTIzLTUuNzA4bC00LjM5LTYuNTg2Yy0zLjUxMiAyLjYzNC03LjkwMyA0LjM5LTEyLjI5MyA0LjM5LTUuNzA4IDAtMTEuNDE1LTIuNjM0LTEyLjczMi0xMC4wOThoMzEuMTczdi0zLjUxMmMuNDM5LTEzLjYxMS03LjQ2NC0yMi4zOTItMTkuMzE4LTIyLjM5MnptMCA3LjkwM2M1LjcwOCAwIDkuNjU5IDMuNTEyIDEwLjUzNyAxMC4wOThoLTIxLjk1MmMuODc4LTUuNzA4IDQuODMtMTAuMDk4IDExLjQxNS0xMC4wOTh6bTIyOC43NDUgMTQuMDV2LTM3Ljc1OGgtOS4yMnYyMS45NTJjLTMuMDczLTMuOTUxLTcuNDY0LTYuMTQ3LTEzLjE3MS02LjE0Ny0xMS44NTQgMC0yMS4wNzQgOS4yMi0yMS4wNzQgMjEuOTUyIDAgMTIuNzMyIDkuMjIgMjEuOTUyIDIxLjA3NCAyMS45NTIgNi4xNDcgMCAxMC41MzctMi4xOTUgMTMuMTcxLTYuMTQ3djUuMjY5aDkuMjJ2LTIxLjA3NHptLTMzLjgwNyAwYzAtNy40NjQgNC44My0xMy42MTEgMTIuNzMyLTEzLjYxMSA3LjQ2NCAwIDEyLjczMiA1LjcwOCAxMi43MzIgMTMuNjExIDAgNy40NjQtNS4yNjkgMTMuNjExLTEyLjczMiAxMy42MTEtNy45MDMtLjQzOS0xMi43MzItNi4xNDctMTIuNzMyLTEzLjYxMXptLTMwOC4yMTMgMHYtMjEuMDc0aC05LjIydjUuMjY5Yy0zLjA3My0zLjk1MS03LjQ2NC02LjE0Ny0xMy4xNzEtNi4xNDctMTEuODU0IDAtMjEuMDc0IDkuMjItMjEuMDc0IDIxLjk1MiAwIDEyLjczMiA5LjIyIDIxLjk1MiAyMS4wNzQgMjEuOTUyIDYuMTQ3IDAgMTAuNTM3LTIuMTk1IDEzLjE3MS02LjE0N3Y1LjI2OWg5LjIydi0yMS4wNzR6bS0zNC4yNDYgMGMwLTcuNDY0IDQuODMtMTMuNjExIDEyLjczMi0xMy42MTEgNy40NjQgMCAxMi43MzIgNS43MDggMTIuNzMyIDEzLjYxMSAwIDcuNDY0LTUuMjY5IDEzLjYxMS0xMi43MzIgMTMuNjExLTcuOTAzLS40MzktMTIuNzMyLTYuMTQ3LTEyLjczMi0xMy42MTF6Ii8+PHBhdGggZmlsbD0iI0ZGNUYwMCIgZD0iTTE4Ni41OTYgMzMuODA3aDEzOC4zMDF2MjQ4LjUwMmgtMTM4LjMwMXoiLz48cGF0aCBkPSJNMTk1LjM3NyAxNTguMDU4YzAtNTAuNDkxIDIzLjcwOS05NS4yNzQgNjAuMTUtMTI0LjI1MS0yNi43ODItMjEuMDc0LTYwLjU4OS0zMy44MDctOTcuNDY5LTMzLjgwNy04Ny4zNzEgMC0xNTguMDU4IDcwLjY4Ny0xNTguMDU4IDE1OC4wNThzNzAuNjg3IDE1OC4wNTggMTU4LjA1OCAxNTguMDU4YzM2Ljg4IDAgNzAuNjg3LTEyLjczMiA5Ny40NjktMzMuODA3LTM2LjQ0MS0yOC41MzgtNjAuMTUtNzMuNzYtNjAuMTUtMTI0LjI1MXoiIGZpbGw9IiNFQjAwMUIiLz48cGF0aCBkPSJNNTExLjQ5MyAxNTguMDU4YzAgODcuMzcxLTcwLjY4NyAxNTguMDU4LTE1OC4wNTggMTU4LjA1OC0zNi44OCAwLTcwLjY4Ny0xMi43MzItOTcuNDY5LTMzLjgwNyAzNi44OC0yOC45NzcgNjAuMTUtNzMuNzYgNjAuMTUtMTI0LjI1MXMtMjMuNzA5LTk1LjI3NC02MC4xNS0xMjQuMjUxYzI2Ljc4Mi0yMS4wNzQgNjAuNTg5LTMzLjgwNyA5Ny40NjktMzMuODA3IDg3LjM3MSAwIDE1OC4wNTggNzEuMTI2IDE1OC4wNTggMTU4LjA1OHoiIGZpbGw9IiNGNzlFMUIiLz48L3N2Zz4='",
  Unionpay: "'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDUxMiAzMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxwYXRoIGQ9Ik0xMDAuMDgzLjAwMWgxMjcuNTU3YzE3LjgwNiAwIDI4Ljg4IDE0LjUxMyAyNC43MjcgMzIuMzc4bC01OS4zODcgMjU0Ljk3MWMtNC4xOTEgMTcuODAzLTIyLjAxOSAzMi4zMjgtMzkuODM3IDMyLjMyOGgtMTI3LjU0NWMtMTcuNzgxIDAtMjguODgtMTQuNTI2LTI0LjcyNy0zMi4zMjhsNTkuNDEyLTI1NC45NzFjNC4xNTQtMTcuODY1IDIxLjk3Mi0zMi4zNzggMzkuOC0zMi4zNzgiIGZpbGw9IiNFMjE4MzYiLz48cGF0aCBkPSJNMjE3LjAyNy4wMDFoMTQ2LjY4N2MxNy44MDMgMCA5Ljc3NSAxNC41MTMgNS41ODcgMzIuMzc4bC01OS4zNzggMjU0Ljk3MWMtNC4xNjYgMTcuODAzLTIuODY3IDMyLjMyOC0yMC43MDcgMzIuMzI4aC0xNDYuNjg3Yy0xNy44NCAwLTI4Ljg4LTE0LjUyNi0yNC42ODktMzIuMzI4bDU5LjM3NS0yNTQuOTcxYzQuMjE2LTE3Ljg2NSAyMS45OTctMzIuMzc4IDM5LjgxMi0zMi4zNzgiIGZpbGw9IiMwMDQ0N0MiLz48cGF0aCBkPSJNMzU3Ljg5Ni4wMDFoMTI3LjU1N2MxNy44MzEgMCAyOC45MDUgMTQuNTEzIDI0LjcxNyAzMi4zNzhsLTU5LjM3OCAyNTQuOTcxYy00LjE5MSAxNy44MDMtMjIuMDMxIDMyLjMyOC0zOS44NTkgMzIuMzI4aC0xMjcuNDk4Yy0xNy44NCAwLTI4LjkwNS0xNC41MjYtMjQuNzI3LTMyLjMyOGw1OS4zODctMjU0Ljk3MWM0LjE1NC0xNy44NjUgMjEuOTYtMzIuMzc4IDM5LjgtMzIuMzc4IiBmaWxsPSIjMDA3Qjg0Ii8+PHBhdGggZD0iTTEzMy4zOTcgODEuNzEyYy0xMy4xMTcuMTM0LTE2Ljk5MSAwLTE4LjIyOS0uMjkyLS40NzYgMi4yNi05LjMyNyA0My4wOTItOS4zNTIgNDMuMTI2LTEuOTA2IDguMjYxLTMuMjkzIDE0LjE1LTguMDAzIDE3Ljk1Mi0yLjY3NCAyLjIxMS01Ljc5NSAzLjI3Ny05LjQxNCAzLjI3Ny01LjgxNyAwLTkuMjA2LTIuODg4LTkuNzc1LTguMzY3bC0uMTA5LTEuODgxczEuNzcyLTExLjA2NSAxLjc3Mi0xMS4xMjdjMCAwIDkuMjktMzcuMjEgMTAuOTUzLTQyLjEyOC4wODctLjI4LjExMi0uNDI2LjEzNC0uNTYtMTguMDgzLjE1OS0yMS4yODggMC0yMS41MDktLjI5Mi0uMTIxLjQwMS0uNTY5IDIuNzA4LS41NjkgMi43MDhsLTkuNDg2IDQxLjkzOS0uODE1IDMuNTU3LTEuNTc2IDExLjYzNGMwIDMuNDUxLjY3OCA2LjI2OCAyLjAyNyA4LjY1IDQuMzIyIDcuNTUyIDE2LjY0OSA4LjY4NCAyMy42MjMgOC42ODQgOC45ODUgMCAxNy40MTQtMS45MDkgMjMuMTEtNS4zOTQgOS44ODctNS44NDIgMTIuNDc0LTE0Ljk3MyAxNC43ODEtMjMuMDg4bDEuMDctNC4xNjNzOS41Ny0zOC42NDYgMTEuMTk2LTQzLjY3NGMuMDYyLS4yOC4wODctLjQyNi4xNzEtLjU2em0zMi41NjEgMzEuMTc2Yy0yLjMwNyAwLTYuNTIzLjU2LTEwLjMxIDIuNDE2LTEuMzc0LjcwNi0yLjY3NCAxLjUyLTQuMDQ1IDIuMzMybDEuMjM3LTQuNDY4LS42NzgtLjc1MmMtOC4wMzEgMS42MjYtOS44MjggMS44NDQtMTcuMjQ2IDIuODg4bC0uNjIyLjQxNGMtLjg2MSA3LjE0Mi0xLjYyNiAxMi41MTEtNC44MTkgMjYuNTQ5LTEuMjE2IDUuMTc0LTIuNDc4IDEwLjM5Ny0zLjc0MyAxNS41NThsLjM0Mi42NTZjNy42MDItLjQwMSA5LjkwOS0uNDAxIDE2LjUxNi0uMjkybC41MzUtLjU4MWMuODM5LTQuMy45NDgtNS4zMDcgMi44MDgtMTQuMDE2Ljg3NC00LjEyOSAyLjY5Ni0xMy4yMDEgMy41OTQtMTYuNDMyIDEuNjUxLS43NjUgMy4yOC0xLjUxNyA0LjgzNS0xLjUxNyAzLjcwMyAwIDMuMjUyIDMuMjMgMy4xMDkgNC41MTgtLjE1OSAyLjE2MS0xLjUwOCA5LjIxOC0yLjg5MSAxNS4yNzhsLS45MjMgMy45MTFjLS42NDQgMi44ODgtMS4zNDkgNS42OTYtMS45OTMgOC41NTlsLjI4LjU3MmM3LjQ5My0uNDAxIDkuNzc4LS40MDEgMTYuMTc3LS4yOTJsLjc1Mi0uNTgxYzEuMTU3LTYuNzE2IDEuNDk1LTguNTEzIDMuNTQ3LTE4LjI5MWwxLjAzMi00LjQ5M2MyLjAwNS04Ljc5MyAzLjAxMy0xMy4yNTEgMS40OTUtMTYuODgyLTEuNjA0LTQuMDctNS40NTMtNS4wNTItOC45ODgtNS4wNTJ6bTM2LjM3NCA5LjIwNmMtMy45ODMuNzY1LTYuNTIzIDEuMjc1LTkuMDQ3IDEuNjA0LTIuNTAzLjQwMS00Ljk0My43NjUtOC43OTMgMS4zbC0uMzA1LjI3Ny0uMjguMjIxYy0uNDAxIDIuODY3LS42ODEgNS4zNDUtMS4yMTMgOC4yNTgtLjQ1MSAzLjAxMy0xLjE0NCA2LjQzNi0yLjI3MyAxMS4zNTQtLjg3NCAzLjc2NS0xLjMyNCA1LjA3Ny0xLjgyMiA2LjQwMi0uNDg1IDEuMzI0LTEuMDIgMi42MTItMi4wMDIgNi4zMTVsLjIzLjM0Mi4xOTMuMzE0YzMuNTk3LS4xNzEgNS45NTEtLjI5MiA4LjM3LS4zMTQgMi40MTYtLjA4NyA0LjkxOSAwIDguNzkzLjAyMmwuMzM5LS4yNzcuMzY0LS4zMDVjLjU2LTMuMzM5LjY0NC00LjIzOC45ODYtNS44NjcuMzM5LTEuNzQ3LjkyMy00LjE2NiAyLjM1Ny0xMC42MjcuNjc4LTMuMDM0IDEuNDMzLTYuMDYgMi4xMzYtOS4xNTYuNzMxLTMuMDg0IDEuNDk1LTYuMTIyIDIuMjIzLTkuMTU2bC0uMTA5LS4zNjctLjE0Ni0uMzM5em0uMDg1LTEyLjQxMmMtMy42MTktMi4xMzYtOS45NzEtMS40NTgtMTQuMjQ2IDEuNDkyLTQuMjYzIDIuODkxLTQuNzQ4IDYuOTk1LTEuMTQxIDkuMTU5IDMuNTU3IDIuMDc3IDkuOTM0IDEuNDU4IDE0LjE3MS0xLjUxNyA0LjI1My0yLjk1NCA0Ljc4NS03LjAyIDEuMjE2LTkuMTM1em0yMS44ODcgNDkuNDY3YzcuMzIyIDAgMTQuODI3LTIuMDE4IDIwLjQ3Ny04LjAwNiA0LjM0Ny00Ljg1NiA2LjMzOS0xMi4wODIgNy4wMy0xNS4wNTcgMi4yNDgtOS44NjIuNDk3LTE0LjQ2Ny0xLjcwMS0xNy4yNzEtMy4zMzktNC4yNzUtOS4yNC01LjY0Ni0xNS4zNjItNS42NDYtMy42ODEgMC0xMi40NDkuMzY0LTE5LjI5OCA2LjY3OC00LjkxOSA0LjU1NS03LjE5MSAxMC43MzYtOC41NjIgMTYuNjYyLTEuMzg0IDYuMDM4LTIuOTc1IDE2LjkwNyA3LjAyIDIwLjk1MiAzLjA4NCAxLjMyNCA3LjUzIDEuNjg4IDEwLjM5NyAxLjY4OHptLS41NzItMjIuMTljMS42ODgtNy40NjggMy42ODEtMTMuNzM2IDguNzY4LTEzLjczNiAzLjk4NiAwIDQuMjc1IDQuNjY0IDIuNTAzIDEyLjE1Ny0uMzE3IDEuNjYzLTEuNzcyIDcuODQ3LTMuNzQgMTAuNDgxLTEuMzc0IDEuOTQzLTMgMy4xMjItNC43OTcgMy4xMjItLjUzNSAwLTMuNzE1IDAtMy43NjUtNC43MjMtLjAyNS0yLjMzMi40NTEtNC43MTMgMS4wMzItNy4zem00Ni4zODIgMjEuMjI5bC41NzItLjU4MWMuODExLTQuMy45NDUtNS4zMSAyLjc0Mi0xNC4wMTYuODk5LTQuMTI5IDIuNzU4LTEzLjIwMSAzLjYzMS0xNi40MzIgMS42NTQtLjc2OCAzLjI1NS0xLjUyIDQuODYtMS41MiAzLjY3OCAwIDMuMjMgMy4yMyAzLjA4NCA0LjUxOC0uMTM0IDIuMTY0LTEuNDgzIDkuMjE4LTIuODkxIDE1LjI3OGwtLjg3NCAzLjkxMWMtLjY2OCAyLjg5MS0xLjM5NiA1LjY5Ni0yLjA0IDguNTYybC4yOC41NzJjNy41MTgtLjQwMSA5LjcxNi0uNDAxIDE2LjE1Mi0uMjkybC43NzctLjU4MWMxLjEyOS02LjcxOSAxLjQzMy04LjUxNiAzLjU0Ny0xOC4yOTFsMS4wMDctNC40OTZjMi4wMTUtOC43OTMgMy4wMzQtMTMuMjQ4IDEuNTQyLTE2Ljg3OS0xLjY1MS00LjA3LTUuNTI1LTUuMDUyLTkuMDEtNS4wNTItMi4zMSAwLTYuNTQ4LjU1Ny0xMC4zMTMgMi40MTYtMS4zNDYuNzA2LTIuNjk2IDEuNTE3LTQuMDIgMi4zMzJsMS4xNTMtNC40NjgtLjYxOS0uNzU2Yy04LjAyOCAxLjYyOS05Ljg2MiAxLjg0Ny0xNy4yNzEgMi44OTFsLS41NjkuNDE0Yy0uODk5IDcuMTQyLTEuNjI5IDEyLjUwOC00LjgyMiAyNi41NDktMS4yMTYgNS4xNzQtMi40NzggMTAuMzk3LTMuNzQgMTUuNTU4bC4zMzkuNjU2YzcuNjE0LS40MDEgOS44ODctLjQwMSAxNi40ODEtLjI5MnptNTUuMjM1LjI5MWMuNDczLTIuMzA3IDMuMjgtMTUuOTgxIDMuMzA1LTE1Ljk4MSAwIDAgMi4zOTEtMTAuMDMzIDIuNTM3LTEwLjM5NyAwIDAgLjc1Mi0xLjA0NSAxLjUwNS0xLjQ1OGgxLjEwN2MxMC40NDMgMCAyMi4yMzYgMCAzMS40OC02LjggNi4yOS00LjY2NCAxMC41OS0xMS41NSAxMi41MDgtMTkuOTIuNDk3LTIuMDUyLjg2NC00LjQ5My44NjQtNi45MzMgMC0zLjIwNS0uNjQ0LTYuMzc3LTIuNTAzLTguODU1LTQuNzEzLTYuNTk0LTE0LjEtNi43MTYtMjQuOTM1LTYuNzY1bC01LjM0MS4wNWMtMTMuODcuMTcxLTE5LjQzMi4xMjEtMjEuNzE3LS4xNTktLjE5MyAxLjAxLS41NTcgMi44MDgtLjU1NyAyLjgwOHMtNC45NjggMjMuMDI2LTQuOTY4IDIzLjA2M2MwIDAtMTEuODg5IDQ4Ljk1Ni0xMi40NDkgNTEuMjYzIDEyLjExLS4xNDYgMTcuMDc1LS4xNDYgMTkuMTY1LjA4NHptOS4yMDYtNDAuOTAzczUuMjgyLTIyLjk3OSA1LjI1Ny0yMi44OTJsLjE3MS0xLjE3OC4wNzUtLjg5OSAyLjExMS4yMThzMTAuODk0LjkzNiAxMS4xNDkuOTYxYzQuMyAxLjY2MyA2LjA3MiA1Ljk1MSA0LjgzNSAxMS41NDctMS4xMjkgNS4xMTQtNC40NDYgOS40MTQtOC43MDkgMTEuNDkxLTMuNTEgMS43Ni03LjgxIDEuOTA2LTEyLjI0MSAxLjkwNmgtMi44NjdsLjIxOC0xLjE1M3ptMzIuODg5IDE5LjgwOWMtMS4zOTYgNS45NTEtMyAxNi44MiA2Ljk0NiAyMC42OTQgMy4xNzEgMS4zNDkgNi4wMTMgMS43NSA4LjkwMSAxLjYwNCAzLjA1LS4xNjUgNS44NzYtMS42OTQgOC40OTQtMy44OTZsLS43MDkgMi43MTcuNDUxLjU4MWM3LjE1NC0uMzAyIDkuMzc0LS4zMDIgMTcuMTI1LS4yNDNsLjcwMy0uNTM1YzEuMTMyLTYuNjUzIDIuMTk4LTEzLjExNCA1LjEzOS0yNS44NDMgMS40MzMtNi4wOTcgMi44NjMtMTIuMTM1IDQuMzM0LTE4LjIwN2wtLjIzLS42NjhjLTguMDAzIDEuNDgzLTEwLjE0MiAxLjgtMTcuODQgMi44OTFsLS41ODUuNDc2LS4yMzMgMS44MDZjLTEuMTk3LTEuOTM0LTIuOTMyLTMuNTg1LTUuNjA5LTQuNjE0LTMuNDIzLTEuMzQ2LTExLjQ2My4zODktMTguMzc1IDYuNjgxLTQuODU2IDQuNDkzLTcuMTg4IDEwLjY0OS04LjUxMyAxNi41NTN6bTE2LjgwOC4zNjRjMS43MTMtNy4zMzQgMy42ODEtMTMuNTQgOC43OC0xMy41NCAzLjIyNCAwIDQuOTIyIDIuOTc1IDQuNTc3IDguMDQ5LS4yNzQgMS4yNjUtLjU2OSAyLjU5OS0uOTIgNC4xMDctLjUxIDIuMTc5LTEuMDYzIDQuMzQtMS42MDEgNi41MDQtLjU0NyAxLjQ4LTEuMTg1IDIuODc2LTEuODg0IDMuODA2LTEuMzEyIDEuODU5LTQuNDM0IDMuMDEzLTYuMjMxIDMuMDEzLS41MSAwLTMuNjU2IDAtMy43NjUtNC42MzktLjAyNS0yLjMxLjQ1MS00LjY4OSAxLjA0NS03LjN6bTg3Ljc3Mi0yNC4yMTdsLS42MTktLjcwNmMtNy45MTkgMS42MDQtOS4zNTIgMS44NTktMTYuNjI3IDIuODQybC0uNTM1LjUzNS0uMDg0LjM0Mi0uMDI1LS4xMjFjLTUuNDE2IDEyLjQ5NS01LjI1NyA5LjgtOS42NjYgMTkuNjM3bC0uMDUtMS4yMDMtMS4xMDQtMjEuMzI1LS42OTMtLjcwNmMtOC4yOTUgMS42MDQtOC40OTEgMS44NTktMTYuMTUyIDIuODQybC0uNTk3LjUzNWMtLjA4NC4yNTUtLjA4NC41MzUtLjEzNC44MzlsLjA1LjEwOWMuOTU4IDQuODk0LjcyOCAzLjgwMiAxLjY4OCAxMS41MjUuNDQ4IDMuNzkgMS4wNDUgNy42MDIgMS40OTIgMTEuMzQ1Ljc1NiA2LjI2NSAxLjE3OCA5LjM0OSAyLjEwMiAxOC45MS01LjE3NCA4LjUzOC02LjM5OSAxMS43NjgtMTEuMzc5IDE5LjI2MWwuMDM0LjA3NS0zLjUwNyA1LjU0N2MtLjQwMS41ODUtLjc2NS45ODYtMS4yNzUgMS4xNTctLjU2LjI3Ny0xLjI4Ny4zMjYtMi4yOTguMzI2aC0xLjk0M2wtMi44ODggOS42MDcgOS45MDkuMTcxYzUuODE3LS4wMjUgOS40NzMtMi43NDUgMTEuNDQxLTYuNDAybDYuMjMxLTEwLjY3N2gtLjA5OWwuNjU2LS43NTJjNC4xOTEtOS4wMjMgMzYuMDcyLTYzLjcxMiAzNi4wNzItNjMuNzEyem0tMTA0LjU4IDEyNi4xNzVoLTQuMjA0bDE1LjU1OC01MS40NTloNS4xNjFsMS42MzgtNS4zMDEuMTU5IDUuODk1Yy0uMTkzIDMuNjQ0IDIuNjc0IDYuODc0IDEwLjIwNCA2LjMzOWg4LjcwOWwyLjk5Ny05LjkwOWgtMy4yNzdjLTEuODg0IDAtMi43NTgtLjQ3Ni0yLjY0OS0xLjQ5NWwtLjE1OS01Ljk5N2gtMTYuMTI3di4wMzFjLTUuMjE0LjEwOS0yMC43ODQuNTAxLTIzLjkzNyAxLjM0LTMuODE1Ljk4Mi03LjgzNSAzLjg3NC03LjgzNSAzLjg3NGwxLjU3OS01LjMwN2gtMTUuMDg1bC0zLjE0MyAxMC41MzEtMTUuNzY2IDUyLjI0NWgtMy4wNTlsLTMgOS44MzdoMzAuMDQ2bC0xLjAwNyAzLjI4aDE0LjgwNmwuOTgyLTMuMjhoNC4xNTRsMy4yNTUtMTAuNjI0em0tMTIuMzI4LTQxLjAwM2MtMi40MTYuNjY4LTYuOTEyIDIuNjk2LTYuOTEyIDIuNjk2bDMuOTk4LTEzLjE1MmgxMS45ODZsLTIuODkxIDkuNTgycy0zLjcwMy4yMTgtNi4xODEuODc0em0uMjMgMTguNzg4cy0zLjc2NS40NzMtNi4yNDMgMS4wMzJjLTIuNDQxLjc0LTcuMDE3IDMuMDcyLTcuMDE3IDMuMDcybDQuMTI5LTEzLjY4NmgxMi4wNDhsLTIuOTE2IDkuNTgyem0tNi43MTYgMjIuMzM2aC0xMi4wMjNsMy40ODUtMTEuNTVoMTEuOTg2bC0zLjQ0OCAxMS41NXptMjguOTU0LTMxLjkxOGgxNy4zM2wtMi40OSA4LjA2NWgtMTcuNTZsLTIuNjM3IDguODE3aDE1LjM2NWwtMTEuNjM0IDE2LjM4MmMtLjgxNSAxLjIwMy0xLjU0NSAxLjYyOS0yLjM1NyAxLjk2OC0uODE1LjQxNC0xLjg4NC44OTktMy4xMjIuODk5aC00LjI2M2wtMi45MjkgOS42NTdoMTEuMTQ5YzUuNzk1IDAgOS4yMTgtMi42MzcgMTEuNzQ2LTYuMDk3bDcuOTc4LTEwLjkxOSAxLjcxMyAxMS4wODdjLjM2NCAyLjA3NyAxLjg1NiAzLjI5MyAyLjg2NyAzLjc2NSAxLjExNi41NiAyLjI3IDEuNTIgMy44OTkgMS42NjMgMS43NDcuMDc1IDMuMDEuMTM0IDMuODQ5LjEzNGg1LjQ3OGwzLjI4OS0xMC44MDdoLTIuMTYxYy0xLjI0MSAwLTMuMzc2LS4yMDgtMy43NC0uNTk3LS4zNjQtLjQ3My0uMzY0LTEuMi0uNTYtMi4zMDdsLTEuNzM4LTExLjExMmgtNy4xMTdsMy4xMjItMy43MTVoMTcuNTI2bDIuNjk2LTguODE3aC0xNi4yMjZsMi41MjgtOC4wNjVoMTYuMTc3bDMtOS45NDZoLTQ4LjIyOGwtMi45NTEgOS45NDZ6bS0xNDYuMzcxIDM0LjE2NGw0LjA0NS0xMy40NTZoMTYuNjI0bDMuMDM4LTEwLjAwOGgtMTYuNjRsMi41NC04LjI4M2gxNi4yNjFsMy4wMTMtOS42OTFoLTQwLjY4NmwtMi45NTEgOS42OTFoOS4yNDNsLTIuNDY2IDguMjgzaC05LjI2OGwtMy4wNzIgMTAuMTc5aDkuMjRsLTUuMzkxIDE3LjgwM2MtLjcyOCAyLjM1Ny4zNDIgMy4yNTUgMS4wMiA0LjM1LjY5MyAxLjA2NiAxLjM5NiAxLjc3MiAyLjk3NSAyLjE3MyAxLjYyOS4zNjQgMi43NDUuNTgxIDQuMjYzLjU4MWgxOC43NDJsMy4zMzktMTEuMDg3LTguMzA4IDEuMTQxYy0xLjYwNCAwLTYuMDQ3LS4xOTMtNS41NjItMS42NzZ6bTEuOTA3LTY0LjQxN2wtNC4yMTMgNy42MTRjLS45MDIgMS42NjMtMS43MTMgMi42OTYtMi40NDQgMy4xNzEtLjY0NC40MDEtMS45MTguNTY5LTMuNzY1LjU2OWgtMi4xOThsLTIuOTM4IDkuNzQxaDcuM2MzLjUxIDAgNi4yMDYtMS4yODcgNy40OTMtMS45MzEgMS4zODQtLjc0IDEuNzQ3LS4zMTcgMi44MTctMS4zNDlsMi40NjYtMi4xMzZoMjIuNzk2bDMuMDI1LTEwLjE0MmgtMTYuNjg3bDIuOTEzLTUuNTM3aC0xNi41NjV6bTMzLjY1NCA2NC42MTJjLS4zODktLjU2LS4xMDktMS41NDUuNDg1LTMuNTk3bDYuMjMxLTIwLjYyM2gyMi4xNjVjMy4yMy0uMDQ3IDUuNTYyLS4wODQgNy4wNzktLjE5MyAxLjYyOS0uMTcxIDMuNDAxLS43NTIgNS4zMzItMS43OTcgMS45OTMtMS4wOTQgMy4wMTMtMi4yNDggMy44NzQtMy41NzIuOTYxLTEuMzIxIDIuNTAzLTQuMjEzIDMuODI3LTguNjcxbDcuODMyLTI2LjA5OC0yMy4wMDEuMTM0cy03LjA4MyAxLjA0NS0xMC4yMDEgMi4xOThjLTMuMTQ2IDEuMjg3LTcuNjQyIDQuODgxLTcuNjQyIDQuODgxbDIuMDc3LTcuMTU0aC0xNC4yMDlsLTE5Ljg5MiA2NS45NzJjLS43MDYgMi41NjItMS4xNzggNC40MjEtMS4yODcgNS41MzctLjAzNyAxLjIwMyAxLjUxNyAyLjM5NCAyLjUyNSAzLjI5MyAxLjE5MS44OTkgMi45NTEuNzUyIDQuNjM5Ljg5OSAxLjc3NS4xMzQgNC4zLjIxOCA3Ljc4NS4yMThoMTAuOTE5bDMuMzUyLTExLjMxNy05Ljc3NS45MjNjLTEuMDQ1IDAtMS44LS41Ni0yLjExNC0xLjAzMnptMTAuNzM2LTM4LjE0OWgyMy4yODFsLTEuNDggNC42MzljLS4yMDguMTA5LS43MDYtLjIzLTMuMDc1LjA1aC0yMC4xNTlsMS40MzMtNC42ODl6bTQuNjY0LTE1LjU1OGgyMy40NzdsLTEuNjg4IDUuNTg3cy0xMS4wNjUtLjEwOS0xMi44MzcuMjE4Yy03Ljc5OCAxLjM0OS0xMi4zNTIgNS41MTYtMTIuMzUyIDUuNTE2bDMuNDAxLTExLjMyem0xNy42NTggMzUuNzMxYy0uMTkzLjY5My0uNDk3IDEuMTE2LS45MjMgMS40MzMtLjQ3My4zMDUtMS4yMzcuNDE0LTIuMzc4LjQxNGgtMy4zMTdsLjE5Ni01LjY0OWgtMTMuNzk4bC0uNTYgMjcuNjE4Yy0uMDIyIDEuOTkzLjE3MSAzLjE0NiAxLjYyOSA0LjA3IDEuNDU4IDEuMTUzIDUuOTUxIDEuMyAxMS45OTggMS4zaDguNjQ2bDMuMTIyLTEwLjMzOC03LjUyNy40MTQtMi41MDMuMTQ2Yy0uMzQyLS4xNDYtLjY2OC0uMjgtMS4wMzItLjY0NC0uMzE3LS4zMTQtLjg1Mi0uMTIxLS43NjUtMi4xMTRsLjA1OS03LjA3OSA3Ljg5NC0uMzI2YzQuMjYzIDAgNi4wODUtMS4zODcgNy42MzktMi43MDggMS40ODMtMS4yNjUgMS45NjgtMi43MiAyLjUyOC00LjY4OWwxLjMyNC02LjI2OGgtMTAuODQ4bC0xLjM4NCA0LjQyMXoiIGZpbGw9IiNGRUZFRkUiLz48L3N2Zz4='",
  Visa: "'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSIxNjZweCIgdmlld0JveD0iMCAwIDUxMiAxNjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPiAgICA8Zz4gICAgICAgIDxwYXRoIGQ9Ik0yNjQuNzk0MTg3LDExMi40Nzk0OTEgQzI2NC41MDIwNzIsODkuNDQ4NTYxNiAyODUuMzE5MDgsNzYuNTk1NTE5OCAzMDEuMDAxMDIxLDY4Ljk1NDQxNzIgQzMxNy4xMTM0NDcsNjEuMTEzNDQ2NiAzMjIuNTI1MjU0LDU2LjA4NjAwMDggMzIyLjQ2Mzc1Niw0OS4wNzUyNTA3IEMzMjIuMzQwNzYsMzguMzQzODgzMyAzMDkuNjEwNzE0LDMzLjYwODU1MiAyOTcuNjk1NTE0LDMzLjQyNDA1ODYgQzI3Ni45MDkyNTUsMzMuMTAxMTk1MSAyNjQuODI0OTM1LDM5LjAzNTczMzYgMjU1LjIxNTkwMyw0My41MjUwNzM2IEwyNDcuNzI4NTQ1LDguNDg2Njk3NSBDMjU3LjM2ODMyNiw0LjA0MzQ4MDg3IDI3NS4yMTgwNjUsMC4xNjkxMTg5NzIgMjkzLjcyODkwNSwtMS40MjEwODU0N2UtMTQgQzMzNy4xNzcxMDYsLTEuNDIxMDg1NDdlLTE0IDM2NS42MDQ0NjgsMjEuNDQ3MzYwNSAzNjUuNzU4MjEzLDU0LjcwMjMwMDIgQzM2NS45MjczMzIsOTYuOTA1MTcwOSAzMDcuMzgxNDE5LDk5LjI0MjA4NzYgMzA3Ljc4MTE1NCwxMTguMTA2NTQgQzMwNy45MTk1MjQsMTIzLjgyNTgzNiAzMTMuMzc3NDU1LDEyOS45Mjk0OTQgMzI1LjMzODc3OCwxMzEuNDgyMzEzIEMzMzEuMjU3OTQyLDEzMi4yNjY0MSAzNDcuNjAwOTg1LDEzMi44NjYwMTQgMzY2LjEyNzIsMTI0LjMzMzE5MyBMMzczLjM5OTMxNSwxNTguMjMzODYgQzM2My40MzY2NywxNjEuODYyMjMgMzUwLjYyOTc1MiwxNjUuMzM2ODU3IDMzNC42ODY0NDUsMTY1LjMzNjg1NyBDMjkzLjc5MDQwMywxNjUuMzM2ODU3IDI2NS4wMjQ4MDMsMTQzLjU5NzM4MiAyNjQuNzk0MTg3LDExMi40Nzk0OTEgTTQ0My4yNzYyLDE2Mi40MTU3MTEgQzQzNS4zNDI5ODIsMTYyLjQxNTcxMSA0MjguNjU1MDk2LDE1Ny43ODgwMDEgNDI1LjY3MjQ1MiwxNTAuNjg1MDA0IEwzNjMuNjA1Nzg5LDIuNDkwNjYxMjIgTDQwNy4wMjMyNDIsMi40OTA2NjEyMiBMNDE1LjY2MzY4NCwyNi4zNjcxODUyIEw0NjguNzIwOTE4LDI2LjM2NzE4NTIgTDQ3My43MzI5ODksMi40OTA2NjEyMiBMNTEyLDIuNDkwNjYxMjIgTDQ3OC42MDY2OSwxNjIuNDE1NzExIEw0NDMuMjc2MiwxNjIuNDE1NzExIE00NDkuMzQ5MTA4LDExOS4yMTM1MDEgTDQ2MS44NzkyODcsNTkuMTYwODkxMiBMNDI3LjU2MzUxLDU5LjE2MDg5MTIgTDQ0OS4zNDkxMDgsMTE5LjIxMzUwMSBNMjEyLjE1MjA2MywxNjIuNDE1NzExIEwxNzcuOTI4NTMzLDIuNDkwNjYxMjIgTDIxOS4zMDExODMsMi40OTA2NjEyMiBMMjUzLjUwOTMzOSwxNjIuNDE1NzExIEwyMTIuMTUyMDYzLDE2Mi40MTU3MTEgTTE1MC45NDYzNywxNjIuNDE1NzExIEwxMDcuODgyNTMsNTMuNTY0NTkwNyBMOTAuNDYzMjc1NSwxNDYuMTE4NzkyIEM4OC40MTg0NzM0LDE1Ni40NTA0MjMgODAuMzQ2ODg2MSwxNjIuNDE1NzExIDcxLjM4MzU4MDYsMTYyLjQxNTcxMSBMMC45ODM5NjQ5MjcsMTYyLjQxNTcxMSBMMCwxNTcuNzcyNjI2IEMxNC40NTE5ODQ5LDE1NC42MzYyMzggMzAuODcxODk5NiwxNDkuNTc4MDQzIDQwLjgxOTE3LDE0NC4xNjYyMzYgQzQ2LjkwNzQ1MywxNDAuODYwNzI5IDQ4LjY0NDc2NjEsMTM3Ljk3MDMzMiA1MC42NDM0NDQ4LDEzMC4xMTM5ODcgTDgzLjYzNzAxODgsMi40OTA2NjEyMiBMMTI3LjM2MTk2LDIuNDkwNjYxMjIgTDE5NC4zOTQ1NzEsMTYyLjQxNTcxMSBMMTUwLjk0NjM3LDE2Mi40MTU3MTEiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1Ni4wMDAwMDAsIDgyLjY2ODQyOCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjU2LjAwMDAwMCwgLTgyLjY2ODQyOCkgIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4='",
  VisaElectron: "'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSIyMjhweCIgdmlld0JveD0iMCAwIDUxMiAyMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPiAgICA8Zz4gICAgICAgIDxwYXRoIGQ9Ik0xOTQuMzkzMDEyLDIuOTE5MzQ0MTMgTDEyNy4zNjI1MTcsMTYyLjgzNTk4MSBMODMuNjI3OTMwNywxNjIuODM1OTgxIEw1MC42MzkwMTUyLDM1LjIwODY2MzIgQzQ4LjY0MTU2OTIsMjcuMzY1OTkwNyA0Ni45MDIzODU1LDI0LjQ3OTMzOCA0MC44MTUyNDI0LDIxLjE2NDQyNzYgQzMwLjg2NzI0MjIsMTUuNzYwNTM1MyAxNC40Mzk4MDE4LDEwLjcwNjQ0MTIgMCw3LjU2MTUyNjI4IEwwLjk3NDIwNDQyNCwyLjkxOTM0NDEzIEw3MS4zODE3MjM1LDIuOTE5MzQ0MTMgQzgwLjM0MjQ0MjcsMi45MTkzNDQxMyA4OC40MTA2ODYsOC44ODU1Mjg5NCA5MC40NjA0MzgzLDE5LjIxNjAxODggTDEwNy44OTE1MDUsMTExLjc2MjE3IEwxNTAuOTIzMjI2LDIuOTE5MzQ0MTMgTDE5NC4zOTMwMTIsMi45MTkzNDQxMyBaIE0yNTMuNTE1NDUyLDIuOTE5MzQ0MTMgTDIxOS4zMDcxNDYsMTYyLjgzNTk4MSBMMTc3LjkzMjg4LDE2Mi44MzU5ODEgTDIxMi4xNDExODYsMi45MTkzNDQxMyBMMjUzLjUxNTQ1MiwyLjkxOTM0NDEzIFogTTMwNy43Nzk5NDYsNDcuMjI5Mjk5NyBDMzA3LjkyMDUxOSw0MS40OTg0OTMxIDMxMy4zNzk5ODcsMzUuMzk1MDA0MyAzMjUuMzMxOTcxLDMzLjgzNTYyMzQgQzMzMS4yNTIzODgsMzMuMDcwNjQ0MSAzNDcuNjA3OTA3LDMyLjQ1OTMxNDUgMzY2LjEzNDEzNyw0MC45OTUwNDUyIEwzNzMuMzgxODI2LDcuMDY0NjE2NjQgQzM2My40MjcyODcsMy40NjUyOTA5IDM1MC42MTg3ODcsMCAzMzQuNjg0OTg3LDAgQzI5My43ODQ3NDcsMCAyNjUuMDEzMDI1LDIxLjcyMzQ1MSAyNjQuNzg0MTg2LDUyLjg1NTQ5MzcgQzI2NC41MTYxMTYsNzUuODgzMzMyNSAyODUuMzM0MDE0LDg4LjcxNzk4NTQgMzAwLjk4OTkzNyw5Ni4zODczOTM0IEMzMTcuMTE2NjE2LDEwNC4yMjAyNTggMzIyLjUyMzc3OCwxMDkuMjU0NzM4IDMyMi40NDg1ODgsMTE2LjI1Mzk3MSBDMzIyLjMzNDE2OCwxMjYuOTgzMjk3IDMwOS41NzE0MzYsMTMxLjczMzM2MSAyOTcuNzA0NDQ5LDEzMS45MDk4OTQgQzI3Ni44OTYzNTgsMTMyLjI0MDA3OCAyNjQuODMzMjIzLDEyNi4yODY5NjkgMjU1LjIxMjEzNywxMjEuODA0OTc1IEwyNDcuNzAyOTE3LDE1Ni44NTk5ODkgQzI1Ny4zODI4NDcsMTYxLjI5NjIxNSAyNzUuMjIyNTU3LDE2NS4xNTA1MzQgMjkzLjY5OTc1LDE2NS4zNDY2ODIgQzMzNy4xNzkzNDMsMTY1LjM0NjY4MiAzNjUuNjE3NjEzLDE0My44NzE2ODYgMzY1Ljc0NTEwOSwxMTAuNjI0NTA4IEMzNjUuOTE4Mzc0LDY4LjQyNjQxODggMzA3LjM5NzQ1Niw2Ni4wODU3MTI4IDMwNy43Nzk5NDYsNDcuMjI5Mjk5NyBaIE00NzMuNzQ3NzY1LDE2Mi44MzU5ODEgTDUxMiwxNjIuODM1OTgxIEw0NzguNTc5NTU4LDIuOTE5MzQ0MTMgTDQ0My4yODU4OTcsMi45MTkzNDQxMyBDNDM1LjMyNTUzNSwyLjkxOTM0NDEzIDQyOC42MzY4Nyw3LjUzODY0MjI4IDQyNS42Njg0ODksMTQuNjQyNDg4NiBMMzYzLjU4NzQ3NSwxNjIuODM1OTgxIEw0MDcuMDM0Mzc3LDE2Mi44MzU5ODEgTDQxNS42NTE4MzYsMTM4Ljk0ODM1OCBMNDY4LjczMjkwMSwxMzguOTQ4MzU4IEw0NzMuNzQ3NzY1LDE2Mi44MzU5ODEgWiBNNDI3LjU2NDU5MSwxMDYuMTc4NDc1IEw0NDkuMzUwMTU2LDQ2LjEyNDMyOTYgTDQ2MS44NjQ0MzMsMTA2LjE3ODQ3NSBMNDI3LjU2NDU5MSwxMDYuMTc4NDc1IFogTTMwNi40NjQ3NywyMDYuODU0MzI5IEwyODkuNjU0ODQsMjA2Ljg1NDMyOSBMMjg5LjY1NDg0LDIyMi41MDA0NDQgTDMwOC40NTg5NDcsMjIyLjUwMDQ0NCBMMzA4LjQ1ODk0NywyMjcuMjA0NzQgTDI4My45ODk0MTYsMjI3LjIwNDc0IEwyODMuOTg5NDE2LDE4My43OTcwNjggTDMwNy40OTQ1NSwxODMuNzk3MDY4IEwzMDcuNDk0NTUsMTg4LjUwMTM2NCBMMjg5LjY1NDg0LDE4OC41MDEzNjQgTDI4OS42NTQ4NCwyMDIuMjE1NDE2IEwzMDYuNDY0NzcsMjAyLjIxNTQxNiBMMzA2LjQ2NDc3LDIwNi44NTQzMjkgWiBNMzE3LjE0MzQyMywxODEuNDgxMjA4IEwzMjIuODA4ODQ3LDE4MS40ODEyMDggTDMyMi44MDg4NDcsMjI3LjIwMzQzMyBMMzE3LjE0MzQyMywyMjcuMjAzNDMzIEwzMTcuMTQzNDIzLDE4MS40ODEyMDggWiBNMzQ3Ljc4NzM4MywyMjMuNDY5MDkxIEMzNTEuODQ3NjU4LDIyMy40NjkwOTEgMzU0LjM1ODM1OSwyMjIuNzU5Njg3IDM1Ni40MjExODgsMjIxLjg2MDY3MyBMMzU3LjQ1MDk2OCwyMjUuOTE3Njc5IEMzNTUuNDUzNTIyLDIyNi44MTY2OTMgMzUxLjk3ODQyNCwyMjcuOTExODU2IDM0Ny4wMTU4NjYsMjI3LjkxMTg1NiBDMzM3LjQyNDIwMiwyMjcuOTExODU2IDMzMS42OTMzOTUsMjIxLjUzNzAyOCAzMzEuNjkzMzk1LDIxMi4xMzQ5NzUgQzMzMS42OTMzOTUsMjAyLjczMjkyMSAzMzcuMjI4MDUzLDE5NS4zOTA0MjggMzQ2LjMwOTczMSwxOTUuMzkwNDI4IEMzNTYuNTQ4Njg1LDE5NS4zOTA0MjggMzU5LjE5MDE1MiwyMDQuMjc5MjI2IDM1OS4xOTAxNTIsMjEwLjAxMDAzMiBDMzU5LjE5MDE1MiwyMTEuMTY3MzA5IDM1OS4xMjQ3NjksMjEyLjAwNDIwOSAzNTguOTk0MDAzLDIxMi42NDgyMyBMMzM3LjEwMDU1NywyMTIuNjQ4MjMgQzMzNy4yMjgwNTMsMjIwLjMxNDM2OSAzNDIuMDU5ODQ2LDIyMy40NjkwOTEgMzQ3Ljc4NzM4MywyMjMuNDY5MDkxIFogTTM1My43MTQzMzgsMjA4LjU5MTIyNCBDMzUzLjc3OTcyMSwyMDUuMDUwNzQzIDM1Mi4yMzM0MTcsMTk5LjQ0NzQzMyAzNDUuODU4NTg5LDE5OS40NDc0MzMgQzM0MC4wNjI0LDE5OS40NDc0MzMgMzM3LjYxMzgxMiwyMDQuNjY0OTg0IDMzNy4xNjI2NywyMDguNTkxMjI0IEwzNTMuNzE0MzM4LDIwOC41OTEyMjQgWiBNMzkwLjAyMjc0MSwyMjYuMTA4NTk3IEMzODguNTQxODE5LDIyNi44MTgwMDEgMzg1LjI1NjMzMSwyMjcuOTEzMTYzIDM4MS4wNzE4MjksMjI3LjkxMzE2MyBDMzcxLjY2OTc3NiwyMjcuOTEzMTYzIDM2NS41NTMyMSwyMjEuNTM4MzM2IDM2NS41NTMyMSwyMTIuMDA1NTE3IEMzNjUuNTUzMjEsMjAyLjQxMDU4NCAzNzIuMTE3NjQ4LDE5NS4zOTE3MzUgMzgyLjI5NDQ4OCwxOTUuMzkxNzM1IEMzODUuNjQyMDksMTk1LjM5MTczNSAzODguNjAzOTMzLDE5Ni4yMjUzNjcgMzkwLjE1MDIzOCwxOTcuMDY1NTM2IEwzODguODY1NDY1LDIwMS4zODA4MDQgQzM4Ny41MDg3NywyMDAuNjcxNCAzODUuMzgzODI4LDE5OS44OTY2MTMgMzgyLjI5NDQ4OCwxOTkuODk2NjEzIEMzNzUuMTQ0ODc0LDE5OS44OTY2MTMgMzcxLjI4NDAxNywyMDUuMjQxNjYxIDM3MS4yODQwMTcsMjExLjY4NTE0MSBDMzcxLjI4NDAxNywyMTguODk2ODY5IDM3NS45MTk2NjEsMjIzLjMzOTYzMyAzODIuMTAxNjA5LDIyMy4zMzk2MzMgQzM4NS4zMjE3MTQsMjIzLjMzOTYzMyAzODcuNDQ2NjU3LDIyMi41NjgxMTYgMzg5LjA1NTA3NSwyMjEuODU4NzEyIEwzOTAuMDIyNzQxLDIyNi4xMDg1OTcgWiBNNDA1LjkxODI5MiwxODguNTY0NDU4IEw0MDUuOTE4MjkyLDE5Ni4wMzQ0NDkgTDQxNC4wMjkwMzQsMTk2LjAzNDQ0OSBMNDE0LjAyOTAzNCwyMDAuMzQ2NDQ3IEw0MDUuOTE4MjkyLDIwMC4zNDY0NDcgTDQwNS45MTgyOTIsMjE3LjE1NjM3NyBDNDA1LjkxODI5MiwyMjEuMDIzNzczIDQwNy4wMTM0NTUsMjIzLjIxMDgyOSA0MTAuMTY4MTc3LDIyMy4yMTA4MjkgQzQxMS43MTEyMTIsMjIzLjIxMDgyOSA0MTIuNjE2NzY1LDIyMy4wODMzMzIgNDEzLjQ1MzY2NSwyMjIuODIxODAxIEw0MTMuNzExOTI3LDIyNy4xNDAzMzggQzQxMi42MTY3NjUsMjI3LjUyNjA5NyA0MTAuODc3NTgxLDIyNy45MTE4NTYgNDA4LjY4NzI1NSwyMjcuOTExODU2IEM0MDYuMDQ1Nzg4LDIyNy45MTE4NTYgNDAzLjkyMDg0NiwyMjcuMDA5NTcyIDQwMi41NzA2OSwyMjUuNTMxOTIgQzQwMS4wMjQzODYsMjIzLjc4OTQ2NyA0MDAuMzgwMzY1LDIyMS4wMjM3NzMgNDAwLjM4MDM2NSwyMTcuMzUyNTI2IEw0MDAuMzgwMzY1LDIwMC4zNDY0NDcgTDM5NS41NDg1NzIsMjAwLjM0NjQ0NyBMMzk1LjU0ODU3MiwxOTYuMDM0NDQ5IEw0MDAuMzgwMzY1LDE5Ni4wMzQ0NDkgTDQwMC4zODAzNjUsMTkwLjIzODI1OSBMNDA1LjkxODI5MiwxODguNTY0NDU4IFogTTQyMS45NDQ5MzUsMjA1Ljc1OTQ5MyBDNDIxLjk0NDkzNSwyMDIuMDg4MjQ2IDQyMS44NzYyODMsMTk4LjkzMzUyNCA0MjEuNjg2NjczLDE5Ni4wMzM3OTUgTDQyNi42NDU5NjIsMTk2LjAzMzc5NSBMNDI2LjkwNDIyNCwyMDIuMjE1NzQzIEw0MjcuMDkzODM1LDIwMi4yMTU3NDMgQzQyOC41MTI2NDIsMTk4LjAzMTI0MSA0MzEuOTg3NzQxLDE5NS4zODk3NzQgNDM1Ljc4NjQ4NCwxOTUuMzg5Nzc0IEM0MzYuMzY4MzkxLDE5NS4zODk3NzQgNDM2LjgxOTUzMywxOTUuNDU1MTU3IDQzNy4zMzYwNTgsMTk1LjUxNzI3IEw0MzcuMzM2MDU4LDIwMC44NjU1ODcgQzQzNi43NTQxNSwyMDAuNzM0ODIxIDQzNi4xNzg3ODEsMjAwLjczNDgyMSA0MzUuNDAwNzI1LDIwMC43MzQ4MjEgQzQzMS40MTIzNzIsMjAwLjczNDgyMSA0MjguNTc0NzU2LDIwMy42OTY2NjQgNDI3LjgwMzIzOCwyMDcuOTQ5ODE5IEM0MjcuNjc1NzQyLDIwOC43MjEzMzYgNDI3LjYxMDM1OSwyMDkuNjg1NzMzIDQyNy42MTAzNTksMjEwLjU5MTI4NiBMNDI3LjYxMDM1OSwyMjcuMjA1MDY3IEw0MjEuOTQ0OTM1LDIyNy4yMDUwNjcgTDQyMS45NDQ5MzUsMjA1Ljc1OTQ5MyBaIE00NzIuMTY2NDgxLDIxMS4zNjExNjkgQzQ3Mi4xNjY0ODEsMjIyLjg4ODE2NSA0NjQuMTE0NTgzLDIyNy45MTI4MzYgNDU2LjY0NDU5MywyMjcuOTEyODM2IEM0NDguMjcyMzIsMjI3LjkxMjgzNiA0NDEuNzA3ODgyLDIyMS43Mjc2MTkgNDQxLjcwNzg4MiwyMTEuODc3NjkzIEM0NDEuNzA3ODgyLDIwMS41MDc5NzQgNDQ4LjU5NTk2NSwxOTUuMzkxNDA4IDQ1Ny4xNjExMTgsMTk1LjM5MTQwOCBDNDY2LjExMjAyOSwxOTUuMzkxNDA4IDQ3Mi4xNjY0ODEsMjAxLjg5MzczMiA0NzIuMTY2NDgxLDIxMS4zNjExNjkgWiBNNDQ3LjUwMDgwMiwyMTEuNjg0ODE0IEM0NDcuNTAwODAyLDIxOC41MTA3ODMgNDUxLjM2NDkyOCwyMjMuNjYyOTUxIDQ1Ni45MDI4NTUsMjIzLjY2Mjk1MSBDNDYyLjMxMzI4NiwyMjMuNjYyOTUxIDQ2Ni4zNjcwMjMsMjE4LjU3Mjg5NyA0NjYuMzY3MDIzLDIxMS41NTQwNDggQzQ2Ni4zNjcwMjMsMjA2LjI3NDM4MyA0NjMuNzI4ODI1LDE5OS42MzgwMjQgNDU3LjAzMDM1MiwxOTkuNjM4MDI0IEM0NTAuNDAwNTMxLDE5OS42MzgwMjQgNDQ3LjUwMDgwMiwyMDUuODIzMjQyIDQ0Ny41MDA4MDIsMjExLjY4NDgxNCBaIE00ODAuODQ5OTc3LDIwNC40Njk0OSBDNDgwLjg0OTk3NywyMDEuMTg3MjcxIDQ4MC43ODEzMjUsMTk4LjYxMTE4NyA0ODAuNTkxNzE1LDE5Ni4wMzUxMDIgTDQ4NS42MTMxMTcsMTk2LjAzNTEwMiBMNDg1LjkzNjc2MywyMDEuMTg3MjcxIEw0ODYuMDY0MjU5LDIwMS4xODcyNzEgQzQ4Ny42MTA1NjMsMTk4LjI4NzU0MiA0OTEuMjE2NDI3LDE5NS4zOTEwODEgNDk2LjM2ODU5NiwxOTUuMzkxMDgxIEM1MDAuNjgwNTk1LDE5NS4zOTEwODEgNTA3LjM3OTA2NywxOTcuOTY3MTY2IDUwNy4zNzkwNjcsMjA4LjY1Mzk5MiBMNTA3LjM3OTA2NywyMjcuMjAzMTA2IEw1MDEuNzEzNjQ0LDIyNy4yMDMxMDYgTDUwMS43MTM2NDQsMjA5LjIzNTg5OSBDNTAxLjcxMzY0NCwyMDQuMjE0NDk3IDQ5OS44NDY5NjMsMjAwLjAyNjcyNSA0OTQuNTAxOTE2LDIwMC4wMjY3MjUgQzQ5MC44MzA2NjksMjAwLjAyNjcyNSA0ODcuOTMwOTM5LDIwMi42NjgxOTIgNDg2LjkwNDQyOSwyMDUuODIyOTE1IEM0ODYuNjQyODk3LDIwNi41MzIzMTkgNDg2LjUxNTQwMSwyMDcuNDk2NzE2IDQ4Ni41MTU0MDEsMjA4LjQ2NDM4MiBMNDg2LjUxNTQwMSwyMjcuMjAzMTA2IEw0ODAuODQ5OTc3LDIyNy4yMDMxMDYgTDQ4MC44NDk5NzcsMjA0LjQ2OTQ5IFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4gICAgPC9nPjwvc3ZnPg=='"
};
var assets_default2 = assets;

// components/types/credit-card/tools/index.tsx
var import_luhn = __toESM(require_luhn());
import _19 from "lodash";
var validateLuhn = import_luhn.default.validate;
var getCardContent = (cardNumber) => {
  const content = { flag: "", logo: "" };
  if (!cardNumber) return content;
  const potentialCardContents = (0, import_credit_card_type.default)(cardNumber);
  if (potentialCardContents.length === 1) {
    const cardContent = potentialCardContents.shift();
    const flag = cardContent == null ? void 0 : cardContent.type;
    content.flag = flag || "";
    content.logo = assets_default2[_19.upperFirst(_19.camelCase(flag))] || "";
    return content;
  }
  return content;
};

// components/types/credit-card/card/index.tsx
import _20 from "lodash";
import { jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
function CreditCardComponent(props) {
  var _a;
  const flagRef = useRef4({});
  useEffect8(() => {
    const content = getCardContent(props.number);
    if (!flagRef.current) return;
    if (!content.logo) {
      flagRef.current.style.backgroundImage = "";
      return;
    }
    flagRef.current.style.backgroundImage = `url(${content.logo})`;
  }, [flagRef, props.number]);
  return /* @__PURE__ */ jsxs17(Container23, { children: [
    /* @__PURE__ */ jsxs17("div", { className: "iz-credit-card-left", children: [
      /* @__PURE__ */ jsx26("div", { className: "iz-credit-card-top", children: /* @__PURE__ */ jsx26("div", { id: "iz-credit-card-chip", style: { backgroundImage: `url(${assets_default2.Chip})` } }) }),
      /* @__PURE__ */ jsxs17("div", { className: "iz-credit-card-bottom", children: [
        /* @__PURE__ */ jsx26("div", { className: "iz-credit-card-number", children: /* @__PURE__ */ jsx26("div", { className: "iz-credit-card-elipse", children: Utils.mask.loop(props.number, { sequencyNumber: 4, maxSequency: 4, placeholder: "\u2022" }) }) }),
        /* @__PURE__ */ jsx26("div", { className: "iz-credit-card-name", children: /* @__PURE__ */ jsx26("div", { className: "iz-credit-card-elipse", children: _20.deburr((_a = props.name) == null ? void 0 : _a.replace(/[^A-Za-zÀ-ÿ\s]/g, "").toUpperCase()) || "Nome do Titular" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs17("div", { className: "iz-credit-card-right", children: [
      /* @__PURE__ */ jsx26("div", { className: "iz-credit-card-top", children: /* @__PURE__ */ jsx26("div", { id: "iz-credit-card-flag", ref: flagRef }) }),
      /* @__PURE__ */ jsxs17("div", { className: "iz-credit-card-bottom", children: [
        /* @__PURE__ */ jsx26("span", { children: "validade" }),
        /* @__PURE__ */ jsx26("span", { children: Utils.mask.loop(props.expiry, { sequencyNumber: 2, maxSequency: 2, placeholder: "\u2022", separator: "/" }) })
      ] })
    ] })
  ] });
}

// components/types/credit-card/functions/styles.tsx
import styled27 from "styled-components";
var Container24 = styled27.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-left: -2.5rem;
    transition: ease .3s;
    width: 2rem;

    .iz-credit-card-function {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: ${({ theme }) => theme.t05};
        color: ${({ theme }) => theme.t6};
        font-size: .85rem;
        transform: translateX(-2rem);
        opacity: 0;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.t8};
        }
    }

    .iz-credit-card-function:nth-child(1) {
        transition: 5s ease transform, ease .2s opacity, ease .3s color;
    }

    .iz-credit-card-function:nth-child(2) {
        transition: .3s ease .1s transform, ease .2s opacity, ease .3s color;
    }
`;

// components/types/credit-card/functions/index.tsx
import _21 from "lodash";
import { jsx as jsx27 } from "react/jsx-runtime";
function CreditCardFunctions(props) {
  return _21.some(props.functions, (data) => !data.hide) && /* @__PURE__ */ jsx27(Container24, { className: "iz-credit-card-function-container", children: _21.map(
    props.functions,
    (data, index) => !data.hide && /* @__PURE__ */ jsx27(
      "div",
      {
        className: "iz-credit-card-function",
        onClick: data.function,
        children: /* @__PURE__ */ jsx27("i", { "aria-hidden": true, className: data.icon })
      },
      index
    )
  ) });
}

// components/types/credit-card/index.tsx
import { jsx as jsx28, jsxs as jsxs18 } from "react/jsx-runtime";
function CreditCard(props) {
  const functions = [
    {
      icon: "fa-regular fa-pen-to-square",
      label: "Editar",
      function: props.onEdit,
      hide: !props.onEdit
    },
    {
      icon: "fa-solid fa-gear",
      label: "Configura\xE7\xF5es",
      function: props.onConfig,
      hide: !props.onConfig
    },
    {
      icon: "fa-solid fa-trash-can",
      label: "Remover",
      function: props.onRemove,
      hide: !props.onRemove
    },
    ...props.functions || []
  ];
  return /* @__PURE__ */ jsxs18(Container22, { children: [
    /* @__PURE__ */ jsx28(CreditCardComponent, { ...props }),
    /* @__PURE__ */ jsx28(CreditCardFunctions, { ...props, functions })
  ] });
}

// components/types/block/styles.tsx
import styled28 from "styled-components";
var Container25 = styled28.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.3rem 1.5rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.t05};
    flex: 1 1 20rem;

    header {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .9rem;
        font-weight: 600;
        color: ${({ theme }) => theme.t6};
    }
`;
var Content2 = styled28.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.t7};
`;

// components/types/block/index.tsx
import { jsx as jsx29, jsxs as jsxs19 } from "react/jsx-runtime";
function Block(props) {
  return /* @__PURE__ */ jsxs19(Container25, { children: [
    (!!props.icon || !!props.label) && /* @__PURE__ */ jsxs19("header", { children: [
      !!props.icon && /* @__PURE__ */ jsx29("i", { "aria-hidden": true, className: props.icon }),
      !!props.label && /* @__PURE__ */ jsx29("span", { children: props.label })
    ] }),
    /* @__PURE__ */ jsxs19(Content2, { children: [
      !!props.component && /* @__PURE__ */ jsx29(Component, { content: props.component }),
      props.children
    ] })
  ] });
}

// components/index.tsx
import { jsx as jsx30 } from "react/jsx-runtime";
function Component(props) {
  const renderComponent = (config) => {
    const ComponentElement = types_exports2[config.type];
    return /* @__PURE__ */ jsx30(ComponentElement, { ...config.props });
  };
  const renderRow = (components) => {
    return /* @__PURE__ */ jsx30(RowContainer, { children: _22.map(
      components,
      (data, index) => /* @__PURE__ */ jsx30(Fragment2, { children: renderComponent(data) }, index)
    ) });
  };
  return /* @__PURE__ */ jsx30(Container, { className: props.className, children: _22.map(
    props.content,
    (data, index) => /* @__PURE__ */ jsx30(Fragment2, { children: _22.isArray(data) ? renderRow(data) : renderComponent(data) }, index)
  ) });
}
export {
  Avatar,
  Badge,
  Block,
  Button,
  Chart,
  Component,
  CreditCard,
  Form,
  IconProviderContainer as IconProvider,
  InputDateTime,
  InputFile,
  InputLabel,
  InputSelect,
  InputText,
  InputTextarea,
  LoadingApp,
  LoadingBar,
  Logo,
  Lottie,
  Modal2 as Modal,
  ModalProviderContainer as ModalProvider,
  Paginate,
  StyledComponentsRegistry,
  Table,
  ThemeProviderContainer as ThemeProvider,
  TooltipProviderContainer as TooltipProvider,
  Utils,
  getStorage,
  setStorage,
  useIcon,
  useModal,
  useTheme,
  useTooltip
};
