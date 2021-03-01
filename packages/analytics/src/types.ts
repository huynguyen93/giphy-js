import { IGif, PingbackEventType } from '@giphy/js-types'

export type PingbackAttributes = { [key: string]: string }

export type Pingback = {
    // for pingbacks with GIFs
    gif?: IGif
    userId?: string | number
    eventType?: PingbackEventType
    actionType: PingbackActionType
    attributes?: PingbackAttributes
    queueEvents?: boolean
    arp?: string
}

export type PingbackActionType = 'CLICK' | 'SEEN' | 'HOVER' | 'FAVORITE' | 'SENT'

export type PingbackEvent = {
    event_type?: PingbackEventType
    user_id?: string
    logged_in_user_id?: string
    action_type: string
    random_id?: string
    attributes: any
    ts: number
    analytics_response_payload?: string
}
