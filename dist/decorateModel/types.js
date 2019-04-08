export var FieldKind;
(function (FieldKind) {
    // 展示
    FieldKind[FieldKind["Text"] = 1] = "Text";
    // 日期
    FieldKind[FieldKind["Date"] = 2] = "Date";
    // 数值
    FieldKind[FieldKind["Numeric"] = 10] = "Numeric";
    // 货币
    FieldKind[FieldKind["Currency"] = 11] = "Currency";
})(FieldKind || (FieldKind = {}));
