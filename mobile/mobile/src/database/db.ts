import { PowerSyncDatabase, ReactNativeQuickSqliteOpenFactory } from "@powersync/react-native";
import { APP_SCHEMA } from "./schema";

const factory = new ReactNativeQuickSqliteOpenFactory({
    dbFilename: "despensa_virtual.db",
});

export const db = new PowerSyncDatabase({
    schema: APP_SCHEMA,
    database: factory,
});

