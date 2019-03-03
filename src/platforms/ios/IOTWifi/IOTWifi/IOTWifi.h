#import <Foundation/Foundation.h>

@interface IOTWifi : NSObject
+(BOOL) isAvaliable;
+(NSString *) fetchSSIDInfo;
@end
