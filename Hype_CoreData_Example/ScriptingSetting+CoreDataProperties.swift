//
//  ScriptingSetting+CoreDataProperties.swift
//  exmp2_cd
//
//  Created by Mark Hunte on 10/07/2021.
//
//

import Foundation
import CoreData


extension ScriptingSetting {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<ScriptingSetting> {
        return NSFetchRequest<ScriptingSetting>(entityName: "ScriptingSetting")
    }

    @NSManaged public var name: String?
    @NSManaged public var content: String?

}

extension ScriptingSetting : Identifiable {

}
