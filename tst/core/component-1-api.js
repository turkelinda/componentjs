/*
**  ComponentJS -- Component System for JavaScript <http://componentjs.com>
**  Copyright (c) 2009-2013 Ralf S. Engelschall <http://engelschall.com>
**
**  This Source Code Form is subject to the terms of the Mozilla Public
**  License, v. 2.0. If a copy of the MPL was not distributed with this
**  file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

describe("ComponentJS API Management:", function () {
    describe("symbol:", function () {
        it("cannot be tested in Node's CommonJS environment", function () {
            /*  cannot be tested  */
        })
    })
    describe("version:", function () {
        it("should return reasonable structure", function () {
            expect( ComponentJS.version.major ).to.be.a("number")
            expect( ComponentJS.version.minor ).to.be.a("number")
            expect( ComponentJS.version.micro ).to.be.a("number")
            expect( ComponentJS.version.date  ).to.be.a("number")
        })
    })
})
