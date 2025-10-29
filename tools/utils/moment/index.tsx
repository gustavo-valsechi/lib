import moment from "moment-timezone"

moment.tz(process.env.NEXT_PUBLIC_TIMEZONE || "")

const Moment = (...args: Parameters<typeof moment>) => {
    return moment(...args)
}

export default Moment