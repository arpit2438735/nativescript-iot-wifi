#import "IOTWifi.h"
#import <NetworkExtension/NetworkExtension.h>
#import <SystemConfiguration/CaptiveNetwork.h>

@implementation IOTWifi: NSObject

+(BOOL) isAvaliable {
#if TARGET_OS_SIMULATOR
        return NO;
#else
        BOOL *available = NO;
        if (@available(iOS 11.0, *)) {
            available = YES;
        }
        return available;
#endif
    }
#if !TARGET_OS_SIMULATOR
+ (NSString *)fetchSSIDInfo
{
    NSArray *interFaceNames = (__bridge_transfer id)CNCopySupportedInterfaces();
    for (NSString *name in interFaceNames)
    {
        NSDictionary *info = (__bridge_transfer id)CNCopyCurrentNetworkInfo((__bridge CFStringRef)name);
        NSString *ssid = info[@"SSID"];
        if (ssid) {
            return ssid;
        }
    }
    return nil;
}
#endif

  @end

