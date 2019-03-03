Pod::Spec.new do |s|
  s.name         = "IOTWifi"
  s.version      = "1.0.0"
  s.summary      = "Telegram Database Library in Swift"
  s.authors      = "Arpit Srivastava"
  s.homepage     = "https://github.com/arpit2438735/nativescript-iot-wifi"
  s.source       = { :git => "https://github.com/arpit2438735/nativescript-iot-wifi.git", :tag => s.version }

  s.pod_target_xcconfig = { 'SWIFT_VERSION' => '3.2' }
  s.source_files = 'IOTWifi/*'
  s.requires_arc = true
end