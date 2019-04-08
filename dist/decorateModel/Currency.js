import * as tslib_1 from "tslib";
import numeral from 'numeral';
import { Numeric } from './Numeric';
var Currency = /** @class */ (function (_super) {
    tslib_1.__extends(Currency, _super);
    function Currency() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.format = function (formatString) {
            return numeral(_this.yuan).format(formatString || _this.defaultFormatString);
        };
        _this.clone = function (value) {
            return new Currency(value || _this.value, {
                decimals: _this.decimals,
                displayName: _this.field.displayName,
                isPercent: _this.isPercent,
            });
        };
        return _this;
    }
    Object.defineProperty(Currency.prototype, "presentation", {
        get: function () {
            return this.format();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currency.prototype, "yuan", {
        get: function () {
            return numeral(this.numeral)
                .divide(100)
                .value();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currency.prototype, "kind", {
        get: function () {
            return Currency;
        },
        enumerable: true,
        configurable: true
    });
    Currency.isCurrency = function (model) {
        return model instanceof Currency;
    };
    return Currency;
}(Numeric));
export { Currency };
