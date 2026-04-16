#include <SPI.h>
#include <RFID.h>
#include <WiFi.h>

// WiFi credentials
const char* ssid = "your_SSID";      // Replace with your SSID
const char* password = "your_PASSWORD";  // Replace with your password

// RFID reader
#define SS_PIN 10  // Chip Select Pin
#define RST_PIN 9  // Reset Pin
RFID rfid(SS_PIN, RST_PIN);

void setup() {
    Serial.begin(9600);
    while (!Serial); // Wait for Serial Monitor to open

    // Connect to WiFi
    WiFi.begin(ssid, password);
    Serial.print("Connecting to WiFi");
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("Connected to WiFi!");

    rfid.init();
    Serial.println("RFID reader initialized.");
}

void loop() {
    if (rfid.isCard()) {
        if (rfid.readCardSerial()) {
            Serial.print("Card UID: ");
            for (int i = 0; i < rfid.serNum[0]; i++) {
                Serial.print(rfid.serNum[i], HEX);
                Serial.print(" ");
            }
            Serial.println();

            // Do something with the UID
            // You could send it to a server, for example
            String cardUID = "";
            for (int i = 0; i < rfid.serNum[0]; i++) {
                cardUID += String(rfid.serNum[i], HEX);
            }
            sendToServer(cardUID);

            rfid.halt();
        }
    }
}

void sendToServer(String uid) {
    // Implement server communication logic here
    Serial.println("Sending UID to server: " + uid);
    // Example implementation...
}