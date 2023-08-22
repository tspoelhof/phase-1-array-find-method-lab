// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

function superbowlWin(broncosRecord) {
    const records = broncosRecord.find(record => record.result === "W"); {
        if (records) {
            return records.year;
        } else {
                    return undefined;
                }
            }
        }