export * from '../models/APIKey';
export * from '../models/Action';
export * from '../models/Annotation';
export * from '../models/AnnotationHistorical';
export * from '../models/AnnotationSummary';
export * from '../models/AnnotationTarget';
export * from '../models/AnnotationTargetRequest';
export * from '../models/AnnotationUpdate';
export * from '../models/Collection';
export * from '../models/CollectionHistorical';
export * from '../models/CollectionObj';
export * from '../models/CollectionPermission';
export * from '../models/CollectionPermissionPost';
export * from '../models/CollectionSummary';
export * from '../models/DType';
export * from '../models/Effect';
export * from '../models/Frequency';
export * from '../models/Group';
export * from '../models/GroupHistorical';
export * from '../models/GroupMemberPost';
export * from '../models/GroupSummary';
export * from '../models/GroupUpdate';
export * from '../models/IType';
export * from '../models/IndexFormat';
export * from '../models/LoginResponse';
export * from '../models/Member';
export * from '../models/ModelObject';
export * from '../models/NewPassword';
export * from '../models/ObjectType';
export * from '../models/Observation';
export * from '../models/ObservationHistorical';
export * from '../models/Policy';
export * from '../models/PolicyUpdate';
export * from '../models/PolicyUpdateObject';
export * from '../models/PolicyUpdateSubject';
export * from '../models/RawDataDeleteResponse';
export * from '../models/RawDataPutRequest';
export * from '../models/RawDataPutResponse';
export * from '../models/RawDataPutResponseSeriesInner';
export * from '../models/RawIndexFormat';
export * from '../models/RawSingleTimeSeriesData';
export * from '../models/RawSingleTimeSeriesDataVintage';
export * from '../models/RealIndexFormat';
export * from '../models/SingleTimeSeriesData';
export * from '../models/Space';
export * from '../models/SpaceHistorical';
export * from '../models/SpaceMemberPost';
export * from '../models/SpaceObj';
export * from '../models/SpaceSummary';
export * from '../models/Subject';
export * from '../models/SubjectType';
export * from '../models/SubjectUpdate';
export * from '../models/TSI';
export * from '../models/TSIList';
export * from '../models/TSIQuery';
export * from '../models/TimeSeries';
export * from '../models/TimeSeriesCore';
export * from '../models/TimeSeriesHistorical';
export * from '../models/TimeSeriesSummary';
export * from '../models/TimeSeriesUpdate';
export * from '../models/TimeseriesObj';
export * from '../models/Upload';
export * from '../models/User';
export * from '../models/UserPermissions';
export * from '../models/UserPost';
export * from '../models/UserSummary';
export * from '../models/UserUpdate';
export * from '../models/Vintage';
export * from '../models/VintageHistorical';
export * from '../models/VintageSummary';
export * from '../models/VintageUpdate';
export * from '../models/Visibility';

import { APIKey } from '../models/APIKey';
import { Action, ActionTypeEnum    } from '../models/Action';
import { Annotation    , AnnotationFormatEnum       } from '../models/Annotation';
import { AnnotationHistorical } from '../models/AnnotationHistorical';
import { AnnotationSummary    , AnnotationSummaryFormatEnum      } from '../models/AnnotationSummary';
import { AnnotationTarget     } from '../models/AnnotationTarget';
import { AnnotationTargetRequest } from '../models/AnnotationTargetRequest';
import { AnnotationUpdate  , AnnotationUpdateFormatEnum    } from '../models/AnnotationUpdate';
import { Collection          } from '../models/Collection';
import { CollectionHistorical          } from '../models/CollectionHistorical';
import { CollectionObj } from '../models/CollectionObj';
import { CollectionPermission, CollectionPermissionTypeEnum     , CollectionPermissionRoleEnum  , CollectionPermissionEffectEnum   } from '../models/CollectionPermission';
import { CollectionPermissionPost, CollectionPermissionPostTypeEnum   , CollectionPermissionPostRoleEnum  , CollectionPermissionPostEffectEnum   } from '../models/CollectionPermissionPost';
import { CollectionSummary } from '../models/CollectionSummary';
import { DType } from '../models/DType';
import { Effect } from '../models/Effect';
import { Frequency } from '../models/Frequency';
import { Group          } from '../models/Group';
import { GroupHistorical             } from '../models/GroupHistorical';
import { GroupMemberPost, GroupMemberPostTypeEnum   , GroupMemberPostRoleEnum   } from '../models/GroupMemberPost';
import { GroupSummary } from '../models/GroupSummary';
import { GroupUpdate        } from '../models/GroupUpdate';
import { IType } from '../models/IType';
import { IndexFormat } from '../models/IndexFormat';
import { LoginResponse } from '../models/LoginResponse';
import { Member, MemberTypeEnum     , MemberRoleEnum   } from '../models/Member';
import { ModelObject       } from '../models/ModelObject';
import { NewPassword } from '../models/NewPassword';
import { ObjectType } from '../models/ObjectType';
import { Observation } from '../models/Observation';
import { ObservationHistorical } from '../models/ObservationHistorical';
import { Policy     } from '../models/Policy';
import { PolicyUpdate     } from '../models/PolicyUpdate';
import { PolicyUpdateObject      } from '../models/PolicyUpdateObject';
import { PolicyUpdateSubject    } from '../models/PolicyUpdateSubject';
import { RawDataDeleteResponse } from '../models/RawDataDeleteResponse';
import { RawDataPutRequest } from '../models/RawDataPutRequest';
import { RawDataPutResponse } from '../models/RawDataPutResponse';
import { RawDataPutResponseSeriesInner } from '../models/RawDataPutResponseSeriesInner';
import { RawIndexFormat } from '../models/RawIndexFormat';
import { RawSingleTimeSeriesData               } from '../models/RawSingleTimeSeriesData';
import { RawSingleTimeSeriesDataVintage } from '../models/RawSingleTimeSeriesDataVintage';
import { RealIndexFormat } from '../models/RealIndexFormat';
import { SingleTimeSeriesData        , SingleTimeSeriesDataFormatEnum         } from '../models/SingleTimeSeriesData';
import { Space          } from '../models/Space';
import { SpaceHistorical          } from '../models/SpaceHistorical';
import { SpaceMemberPost, SpaceMemberPostTypeEnum   , SpaceMemberPostRoleEnum   } from '../models/SpaceMemberPost';
import { SpaceObj } from '../models/SpaceObj';
import { SpaceSummary } from '../models/SpaceSummary';
import { Subject    } from '../models/Subject';
import { SubjectType } from '../models/SubjectType';
import { SubjectUpdate    } from '../models/SubjectUpdate';
import { TSI } from '../models/TSI';
import { TSIList } from '../models/TSIList';
import { TSIQuery } from '../models/TSIQuery';
import { TimeSeries                      } from '../models/TimeSeries';
import { TimeSeriesCore          } from '../models/TimeSeriesCore';
import { TimeSeriesHistorical                      } from '../models/TimeSeriesHistorical';
import { TimeSeriesSummary                 } from '../models/TimeSeriesSummary';
import { TimeSeriesUpdate } from '../models/TimeSeriesUpdate';
import { TimeseriesObj } from '../models/TimeseriesObj';
import { Upload  , UploadStatusEnum   } from '../models/Upload';
import { User } from '../models/User';
import { UserPermissions } from '../models/UserPermissions';
import { UserPost } from '../models/UserPost';
import { UserSummary } from '../models/UserSummary';
import { UserUpdate } from '../models/UserUpdate';
import { Vintage } from '../models/Vintage';
import { VintageHistorical } from '../models/VintageHistorical';
import { VintageSummary } from '../models/VintageSummary';
import { VintageUpdate } from '../models/VintageUpdate';
import { Visibility } from '../models/Visibility';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "ActionTypeEnum",
    "AnnotationFormatEnum",
    "AnnotationSummaryFormatEnum",
    "AnnotationUpdateFormatEnum",
    "CollectionPermissionTypeEnum",
    "CollectionPermissionRoleEnum",
    "CollectionPermissionEffectEnum",
    "CollectionPermissionPostTypeEnum",
    "CollectionPermissionPostRoleEnum",
    "CollectionPermissionPostEffectEnum",
    "DType",
    "Effect",
    "Frequency",
    "GroupMemberPostTypeEnum",
    "GroupMemberPostRoleEnum",
    "IType",
    "IndexFormat",
    "MemberTypeEnum",
    "MemberRoleEnum",
    "ObjectType",
    "RawIndexFormat",
    "RealIndexFormat",
    "SingleTimeSeriesDataFormatEnum",
    "SpaceMemberPostTypeEnum",
    "SpaceMemberPostRoleEnum",
    "SubjectType",
    "UploadStatusEnum",
    "Visibility",
]);

let typeMap: {[index: string]: any} = {
    "APIKey": APIKey,
    "Action": Action,
    "Annotation": Annotation,
    "AnnotationHistorical": AnnotationHistorical,
    "AnnotationSummary": AnnotationSummary,
    "AnnotationTarget": AnnotationTarget,
    "AnnotationTargetRequest": AnnotationTargetRequest,
    "AnnotationUpdate": AnnotationUpdate,
    "Collection": Collection,
    "CollectionHistorical": CollectionHistorical,
    "CollectionObj": CollectionObj,
    "CollectionPermission": CollectionPermission,
    "CollectionPermissionPost": CollectionPermissionPost,
    "CollectionSummary": CollectionSummary,
    "Group": Group,
    "GroupHistorical": GroupHistorical,
    "GroupMemberPost": GroupMemberPost,
    "GroupSummary": GroupSummary,
    "GroupUpdate": GroupUpdate,
    "LoginResponse": LoginResponse,
    "Member": Member,
    "ModelObject": ModelObject,
    "NewPassword": NewPassword,
    "Observation": Observation,
    "ObservationHistorical": ObservationHistorical,
    "Policy": Policy,
    "PolicyUpdate": PolicyUpdate,
    "PolicyUpdateObject": PolicyUpdateObject,
    "PolicyUpdateSubject": PolicyUpdateSubject,
    "RawDataDeleteResponse": RawDataDeleteResponse,
    "RawDataPutRequest": RawDataPutRequest,
    "RawDataPutResponse": RawDataPutResponse,
    "RawDataPutResponseSeriesInner": RawDataPutResponseSeriesInner,
    "RawSingleTimeSeriesData": RawSingleTimeSeriesData,
    "RawSingleTimeSeriesDataVintage": RawSingleTimeSeriesDataVintage,
    "SingleTimeSeriesData": SingleTimeSeriesData,
    "Space": Space,
    "SpaceHistorical": SpaceHistorical,
    "SpaceMemberPost": SpaceMemberPost,
    "SpaceObj": SpaceObj,
    "SpaceSummary": SpaceSummary,
    "Subject": Subject,
    "SubjectUpdate": SubjectUpdate,
    "TSI": TSI,
    "TSIList": TSIList,
    "TSIQuery": TSIQuery,
    "TimeSeries": TimeSeries,
    "TimeSeriesCore": TimeSeriesCore,
    "TimeSeriesHistorical": TimeSeriesHistorical,
    "TimeSeriesSummary": TimeSeriesSummary,
    "TimeSeriesUpdate": TimeSeriesUpdate,
    "TimeseriesObj": TimeseriesObj,
    "Upload": Upload,
    "User": User,
    "UserPermissions": UserPermissions,
    "UserPost": UserPost,
    "UserSummary": UserSummary,
    "UserUpdate": UserUpdate,
    "Vintage": Vintage,
    "VintageHistorical": VintageHistorical,
    "VintageSummary": VintageSummary,
    "VintageUpdate": VintageUpdate,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
