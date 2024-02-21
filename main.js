function telephoneCheck(str) {
    const reg = /^(1?|1 ?)(\d{3}|[(]\d{3}[)](?!-))[- ]?\d{3}[- ]?\d{4}$/;
    return reg.test(str);
}

console.log("(392) 485-9432", telephoneCheck("(392) 485-9432")); //Valid format!
console.log("1 392 485 9432", telephoneCheck("1 392 485 9432")); //Not pretty to look at, but also valid.
console.log("13924859432", telephoneCheck("13924859432")); //You're pushing it... this is really only valid because of the proper area code!
console.log("(392(485-9432", telephoneCheck("(392(485-9432")); //Oops... Not valid!
