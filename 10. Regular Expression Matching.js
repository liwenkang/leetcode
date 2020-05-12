/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = [...Array(s.length + 1)].map(x => Array(p.length + 1).fill(false));

    console.log('dp', dp)
    dp[0][0] = true;
    console.log('dp', dp)
    for (let i = 1; i < p.length; i++) {
        dp[0][i + 1] = p[i] === '*' && dp[0][i - 1] ? true : false;
    }
    console.log('dp', dp)
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (s[i] === p[j] || p[j] === '.') {
                dp[i + 1][j + 1] = dp[i][j];
            } else if (p[j] === '*') {
                dp[i + 1][j + 1] =
                    dp[i + 1][j - 1] ||
                    (
                        (s[i] === p[j - 1] || p[j - 1] === '.') && dp[i][j + 1]
                    );
            }
        }
    }
    // 邮箱

    // return dp[s.length][p.length];
};

isMatch('aa', 'a*')
// isMatch('ab', '.*')
