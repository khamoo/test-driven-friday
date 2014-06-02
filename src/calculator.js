// module pattern
module.exports  = function Calculator() {
    // private

    // public
    return {
        add: function(numbersStr) {
            if(numbersStr != null && numbersStr.length > 0){
                var delimiters = ['\n'];
                if(numbersStr.indexOf('//') === 0) {
                    delimiters.push(numbersStr[2]);
                }
                delimiters.forEach(function(delimiter) {
                    var regex = new RegExp(delimiter, 'g');
                    numbersStr = numbersStr.replace(regex, ',');

                });
                var splitted = numbersStr.split(',');
                return splitted
                    .filter(function(line) {
                        return line[0] != '/';
                    })
                    .map(function(number){
                        var v = parseInt(number)
                        return (isNaN(v) ? 0 : v);
                    })
                    .reduce(function(total,current){
                        return total+current;
                    },0)
            }else{
                return 0;
            }
        }
    }
};