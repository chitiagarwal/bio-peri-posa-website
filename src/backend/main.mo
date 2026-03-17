import Array "mo:core/Array";
import List "mo:core/List";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
    productInterest : Text;
    quantity : Nat;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      switch (Text.compare(inquiry1.name, inquiry2.name)) {
        case (#equal) { Text.compare(inquiry1.email, inquiry2.email) };
        case (order) { order };
      };
    };
  };

  type CareerInterest = {
    name : Text;
    email : Text;
    areaOfExpertise : Text;
    message : Text;
  };

  module CareerInterest {
    public func compare(interest1 : CareerInterest, interest2 : CareerInterest) : Order.Order {
      switch (Text.compare(interest1.name, interest2.name)) {
        case (#equal) { Text.compare(interest1.email, interest2.email) };
        case (order) { order };
      };
    };
  };

  let inquiries = List.empty<Inquiry>();
  let careerInterests = List.empty<CareerInterest>();

  public shared ({ caller }) func submitInquiry(inquiry : Inquiry) : async () {
    runtimeDebug("New inquiry submitted by: " # inquiry.name # " (" # inquiry.email # ")");
    inquiries.add(inquiry);
  };

  public shared ({ caller }) func submitCareerInterest(interest : CareerInterest) : async () {
    runtimeDebug("New career interest submitted by: " # interest.name # " (" # interest.email # ")");
    careerInterests.add(interest);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.toArray().sort();
  };

  public query ({ caller }) func getAllCareerInterests() : async [CareerInterest] {
    careerInterests.toArray().sort();
  };

  func runtimeDebug(message : Text) {
    let _ = message;
    // Placeholder for actual logging in production
  };
};
