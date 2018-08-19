var log = console.log.bind(console)
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var ransomNoteArr = ransomNote.split("")
    var magazineArr = magazine.split("")
    if (ransomNoteArr.length === 0) {
        return true
    }

    if (magazineArr.length === 0) {
        return false
    }
    for (var i = 0; i < ransomNoteArr.length; i++) {
        for (var j = 0; j < magazineArr.length; j++) {
            if (magazineArr.includes(ransomNoteArr[i])) {
                if (ransomNoteArr[i] === magazineArr[j]) {
                    ransomNoteArr = ransomNoteArr.slice(0, i).concat(ransomNoteArr.slice(i + 1))
                    magazineArr = magazineArr.slice(0, j).concat(magazineArr.slice(j + 1))
                    i = -1
                    if (ransomNoteArr.length === 0) {
                        return true
                    }
                    break
                }
            } else {
                return false
            }
        }
    }
}

canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh")
