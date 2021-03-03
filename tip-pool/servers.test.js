describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function() {
        // initialization logic
        serverNameInput.value = 'Alice';
    });

    it('should add a new server to allServers on submitServerInfo()', function() {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    afterEach(function() {
        // teardown logic
        allServers = {};
        while (serverTbody.hasChildNodes()) {
            serverTbody.removeChild(serverTbody.firstElementChild);
        }
    });
});

it('should test submitServerInfo()', function() {

});

it('should test updateSeverTable()', function() {
    updateServerTable();
    // expect(curServer).toEqual('Alice');
    // expect(Object.keys(newTr)).toBeDefined();
    // expect(tipAverage).tobeGreaterThanOrEqual(0);
    expect(serverTbody.hasChildNodes).toBeTruthy();
});