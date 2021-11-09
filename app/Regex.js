class Regex {

    static numCheck(num) {

        let pattern = /^[0-9]*$/;

        return pattern.test(num) ? true : false;
    }

}

export default Regex;