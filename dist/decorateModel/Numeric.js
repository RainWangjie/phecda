import * as tslib_1 from "tslib";
import numeral from 'numeral';
import { Value } from './Value';
var Numeric = /** @class */ (function (_super) {
    tslib_1.__extends(Numeric, _super);
    function Numeric(value, numericField) {
        var _this = _super.call(this, value, numericField) || this;
        _this.calcTrend = function (compare) {
            if (compare == undefined || compare === 0 || Number.isNaN(compare)) {
                return undefined;
            }
            return numeral(_this.value)
                .subtract(compare)
                .divide(compare)
                .value();
        };
        _this.format = function (formatString) {
            return _this.numeral.format(formatString || _this.defaultFormatString);
        };
        _this.clone = function (value) {
            return new Numeric(value || _this.value, {
                decimals: _this.decimals,
                displayName: _this.field.displayName,
                isPercent: _this.isPercent,
            });
        };
        _this.numeral = numeral(value);
        _this.decimals = numericField.decimals;
        _this.isPercent = numericField.isPercent;
        return _this;
    }
    Object.defineProperty(Numeric.prototype, "defaultFormatString", {
        get: function () {
            if (this.decimals > 0) {
                return "0,0." + '0'.repeat(this.decimals);
            }
            return '0,0';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numeric.prototype, "presentation", {
        get: function () {
            return this.format();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numeric.prototype, "value", {
        get: function () {
            return this.numeral.value();
        },
        set: function (newValue) {
            this.numeral = numeral(newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numeric.prototype, "fuzzyValue", {
        get: function () {
            return numeral(this.presentation).value();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Numeric.prototype, "kind", {
        get: function () {
            return Numeric;
        },
        enumerable: true,
        configurable: true
    });
    return Numeric;
}(Value));
export { Numeric };
