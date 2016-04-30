
Meteor.publish("index", function (opts) {
    let query = {};
    
    _.each(opts, (val, key) => {
        if (val) {
            query[key] = val;
        }
    });
    
    return Index.find(query);
});