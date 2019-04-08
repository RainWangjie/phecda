import * as tslib_1 from "tslib";
import moment from 'moment';
import { Value } from './Value';
var Date = /** @class */ (function (_super) {
    tslib_1.__extends(Date, _super);
    function Date(value, field) {
        var _this = _super.call(this, value, field) || this;
        _this.format = function (formatString) {
            if (formatString === void 0) { formatString = 'YYYY-MM-DD'; }
            return _this.moment.format(formatString);
        };
        _this.clone = function (value) {
            return new Date(value || _this.value, {
                displayName: _this.field.displayName,
            });
        };
        _this.moment = moment(value);
        return _this;
    }
    Object.defineProperty(Date.prototype, "presentation", {
        get: function () {
            return this.format();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Date.prototype, "kind", {
        get: function () {
            return Date;
        },
        enumerable: true,
        configurable: true
    });
    return Date;
}(Value));
export { Date };
